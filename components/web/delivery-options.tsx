"use client";

import { Card } from "@/components/ui/card";
import { Zap, Clock, Snail, Coffee } from "lucide-react";

export type DeliverySpeed = "fast" | "chill" | "never";

interface DeliveryOptionsProps {
  selectedSpeed: DeliverySpeed;
  onSelect: (speed: DeliverySpeed) => void;
}

export function DeliveryOptions({ selectedSpeed, onSelect }: DeliveryOptionsProps) {
  const options = [
    {
      id: "fast" as const,
      title: "Fast",
      description: "Livraison ultra-rapide en 1 semaine",
      icon: Zap,
      duration: "7 jours",
      price: "+200€"
    },
    {
      id: "chill" as const,
      title: "Chill",
      description: "Développement tranquille en 2 semaines",
      icon: Clock,
      duration: "14 jours",
      price: "Inclus"
    },
    {
      id: "never" as const,
      title: "Jamais ou presque",
      description: "On prend notre temps, vraiment",
      icon: Coffee,
      duration: "1 mois+",
      price: "-200€"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {options.map((option) => {
        const isSelected = selectedSpeed === option.id;
        return (
          <Card
            key={option.id}
            className={`relative p-6 cursor-pointer transition-all duration-200 ${
              isSelected
                ? "bg-blue-900/30 border-blue-500"
                : "bg-gray-800/50 border-gray-700 hover:border-gray-600"
            }`}
            onClick={() => onSelect(option.id)}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <option.icon className={`w-12 h-12 ${
                isSelected ? "text-blue-400" : "text-gray-400"
              }`} />
              <h3 className="text-xl font-semibold">{option.title}</h3>
              <p className="text-gray-400 text-sm">{option.description}</p>
              <div className="text-lg font-bold text-blue-400">{option.duration}</div>
              <p className={`text-sm ${
                option.price.includes("+") ? "text-red-400" :
                option.price.includes("-") ? "text-green-400" :
                "text-gray-400"
              }`}>
                {option.price}
              </p>
            </div>
            {isSelected && (
              <div className="absolute inset-0 border-2 border-blue-500 rounded-lg pointer-events-none" />
            )}
          </Card>
        );
      })}
    </div>
  );
}