"use client";

import { useState, useEffect } from "react";
import { addDays, format } from "date-fns";
import { pl } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SocialButtons } from "./social-buttons";
import { Footer } from "./footer";
import { motion } from "framer-motion";
import { Mr_De_Haviland} from 'next/font/google';

const dancingScript = Mr_De_Haviland({
  subsets: ['latin'],
  weight: "400"
});

const cosmeticSchedule = [
  {
    day: "Poniedziałek",
    products: [
      "Timewise® 3D™ 4-w-1 Oczyszczający Żel",
      "TimeWise® Serum Wyrównujące Koloryt Skóry",
      "Mary Kay® Krem Nawilżający na Dzień SPF 30",
    ],
  },
  {
    day: "Wtorek",
    products: [
      "TimeWise® Witamina C Aktywujące Kwadraty™",
      "Mary Kay® Bezolejowy Płyn do Demakijażu Oczu",
      "TimeWise® Krem na Noc z Retinolem",
    ],
  },
  {
    day: "Środa",
    products: [
      "TimeWise Repair® Volu-Firm® Zaawansowane Serum Liftingujące",
      "Mary Kay® Odżywka do Rzęs i Brwi",
      "Mary Kay® Żel Kojący z Aloesem",
    ],
  },
  {
    day: "Czwartek",
    products: [
      "Mary Kay® Bezolejowy Płyn do Demakijażu Oczu",
      "TimeWise® Krem Nawilżający z Ochroną Przeciwsłoneczną SPF 30",
      "Mary Kay® Maseczka Głęboko Oczyszczająca",
    ],
  },
  {
    day: "Piątek",
    products: [
      "TimeWise® Zestaw do Mikrodermabrazji Plus",
      "Mary Kay® Żel Kojący z Aloesem",
      "TimeWise® Serum Wyrównujące Koloryt Skóry",
    ],
  },
  {
    day: "Sobota",
    products: [
      "Mary Kay® Krem CC z Filtrem Przeciwsłonecznym SPF 15",
      "TimeWise® Krem na Noc z Retinolem",
      "Mary Kay® Odżywka do Rzęs i Brwi",
    ],
  },
  {
    day: "Niedziela",
    products: [
      "Mary Kay® Hydrożelowe Płatki pod Oczy",
      "Mary Kay® Peeling Enzymatyczny",
      "TimeWise Repair® Volu-Firm® Zaawansowane Serum Liftingujące",
    ],
  },
];

export default function MaryKayCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());

  useEffect(() => {
    setCurrentDate(new Date());
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-pink-50 to-pink-100">
      <div className="flex items-center justify-between px-4 md:px-8 py-1">
        {/* Social Buttons */}
        <SocialButtons />

        {/* Heart and Name */}
        <div className="flex items-center space-x-2">
          {/* <IoHeart className="w-8 h-8 text-pink-500" /> */}
          <span className={`text-2xl text-pink-700 ${dancingScript.className}`}>
            Beata Hanska
          </span>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center p-3 md:p-8">
        {/* <Card className="w-full border-0 max-w-7xl bg-white shadow-2xl rounded-md overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-pink-400 to-pink-600 text-white relative py-50 px-6">
            <CardTitle className="text-3xl md:text-5xl font-bold text-center ">
              Droga do Piękna
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 md:p-8 bg-white"> */}
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              >
                {cosmeticSchedule.map((item, index) => {
                  const scheduleDate = selectedDate
                    ? addDays(selectedDate, index)
                    : new Date();
                  return (
                    <motion.div
                      key={`${item.day}-${index}`}
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="h-full"
                    >
                      <Card className="bg-gradient-to-br rounded-md border-0 from-pink-50 to-pink-100 hover:from-pink-100 hover:to-pink-200 transition-all duration-300 shadow-md hover:shadow-lg h-full flex flex-col">
                        <CardHeader className="p-4 bg-gradient-to-r from-pink-200 to-pink-300 rounded-t-md">
                          <CardTitle className="text-xl font-semibold text-pink-800">
                            {item.day}
                          </CardTitle>
                          <div className="text-sm text-pink-600 font-medium">
                            {format(scheduleDate, "d MMM", { locale: pl })}
                          </div>
                        </CardHeader>
                        <CardContent className="p-4 bg-white bg-opacity-60 rounded-b-md flex-grow">
                          <ul className="list-disc list-inside">
                            {item.products.map((product, productIndex) => (
                              <li
                                key={productIndex}
                                className="text-sm text-pink-700 font-medium mb-2"
                              >
                                {product}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex justify-center"
              >
                <Calendar
                  mode="single"
                  selected={selectedDate ?? undefined}
                  onSelect={setSelectedDate}
                  locale={pl}
                  className="rounded-md border-2 border-pink-300 p-4 bg-pink-50 shadow-lg"
                  // styles={{
                  //   head_cell: { color: "#db2777" },
                  //   day: { color: "#db2777" },
                  //   nav_button: { color: "#db2777" },
                  //   nav_button_previous: { color: "#db2777" },
                  //   nav_button_next: { color: "#db2777" },
                  //   caption: { color: "#db2777", fontWeight: "bold" },
                  // }}
                />
              </motion.div>
            </div>
          {/* </CardContent>
        </Card> */}
      </div>
      <Footer />
    </div>
  );
}

