"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { PaymentOptions, PaymentOption } from "./payment-options";
import { DeliveryOptions, DeliverySpeed } from "./delivery-options";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Adresse email invalide"),
  company: z.string().optional(),
  projectDescription: z.string().min(20, "Veuillez fournir plus de détails sur votre projet"),
});

export function ContactForm() {
  const { toast } = useToast();
  const [paymentOption, setPaymentOption] = useState<PaymentOption>("full");
  const [deliverySpeed, setDeliverySpeed] = useState<DeliverySpeed>("chill");
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectDescription: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const totalPrice = calculateTotalPrice(paymentOption, deliverySpeed);
    
    toast({
      title: "Formulaire envoyé !",
      description: `Nous vous recontacterons sous 24h. Option de paiement : ${
        paymentOption === "full" ? "Paiement intégral" :
        paymentOption === "split" ? "Paiement 80-20" :
        "Paiement en espèces"
      }, Délai de livraison : ${
        deliverySpeed === "fast" ? "Fast (1 semaine)" :
        deliverySpeed === "chill" ? "Chill (2 semaines)" :
        "Jamais ou presque (1 mois+)"
      }, Prix total : ${totalPrice}€`,
    });
    form.reset();
  }

  function calculateTotalPrice(payment: PaymentOption, speed: DeliverySpeed): number {
    let basePrice = 1500;
    
    // Ajustement selon la vitesse de livraison
    if (speed === "fast") basePrice += 200;
    if (speed === "never") basePrice -= 200;
    
    return basePrice;
  }

  return (
    <div id="contact-form" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Démarrer Votre Projet</h2>
      <div className="max-w-6xl mx-auto space-y-12">
        <div>
          <h3 className="text-xl font-semibold mb-6">Choisissez Votre Option de Paiement</h3>
          <PaymentOptions
            selectedOption={paymentOption}
            onSelect={setPaymentOption}
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-6">Choisissez Votre Délai de Livraison</h3>
          <DeliveryOptions
            selectedSpeed={deliverySpeed}
            onSelect={setDeliverySpeed}
          />
        </div>

        <Card className="bg-gray-800/50 border-gray-700 p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nom</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} className="bg-gray-700" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} className="bg-gray-700" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Entreprise (Optionnel)</FormLabel>
                    <FormControl>
                      <Input placeholder="Votre entreprise" {...field} className="bg-gray-700" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="projectDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description du Projet</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Parlez-nous de votre projet..."
                        className="bg-gray-700"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                Envoyer
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
}