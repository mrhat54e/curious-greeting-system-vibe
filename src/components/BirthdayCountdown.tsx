
import React, { useState, useEffect } from 'react';
import { Heart, Star, Sparkles } from 'lucide-react';

const BirthdayCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-08-03T00:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setIsFinished(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isFinished) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 flex items-center justify-center p-4">
        <div className="text-center animate-fade-in">
          <div className="mb-8 animate-bounce">
            <Heart className="w-20 h-20 text-white mx-auto mb-4 animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 animate-scale-in">
            🎉 Happy Birthday GOLU 🎉
          </h1>
          
          <p className="text-3xl md:text-5xl text-pink-200 font-semibold animate-fade-in">
            Miss u yrr
          </p>
          
          <div className="flex justify-center space-x-4 mt-8">
            <Sparkles className="w-8 h-8 text-yellow-300 animate-bounce" />
            <Star className="w-8 h-8 text-yellow-300 animate-bounce delay-100" />
            <Sparkles className="w-8 h-8 text-yellow-300 animate-bounce delay-200" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-400 via-pink-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 text-center max-w-4xl w-full">
        <div className="mb-8">
          <Heart className="w-16 h-16 text-pink-200 mx-auto mb-4 animate-pulse" />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 animate-fade-in">
            GOLU's Birthday Countdown
          </h1>
          <p className="text-xl md:text-2xl text-pink-200 font-medium">
            3rd August 2025
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/30 animate-scale-in">
            <div className="text-3xl md:text-5xl font-bold text-white mb-2">
              {timeLeft.days}
            </div>
            <div className="text-pink-200 text-sm md:text-lg font-medium uppercase tracking-wider">
              Days
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/30 animate-scale-in delay-100">
            <div className="text-3xl md:text-5xl font-bold text-white mb-2">
              {timeLeft.hours}
            </div>
            <div className="text-pink-200 text-sm md:text-lg font-medium uppercase tracking-wider">
              Hours
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/30 animate-scale-in delay-200">
            <div className="text-3xl md:text-5xl font-bold text-white mb-2">
              {timeLeft.minutes}
            </div>
            <div className="text-pink-200 text-sm md:text-lg font-medium uppercase tracking-wider">
              Minutes
            </div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/30 animate-scale-in delay-300">
            <div className="text-3xl md:text-5xl font-bold text-white mb-2">
              {timeLeft.seconds}
            </div>
            <div className="text-pink-200 text-sm md:text-lg font-medium uppercase tracking-wider">
              Seconds
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <Sparkles className="w-6 h-6 text-yellow-300 animate-bounce" />
          <Star className="w-6 h-6 text-yellow-300 animate-bounce delay-100" />
          <Sparkles className="w-6 h-6 text-yellow-300 animate-bounce delay-200" />
          <Star className="w-6 h-6 text-yellow-300 animate-bounce delay-300" />
        </div>

        <p className="text-lg md:text-xl text-pink-200 font-medium">
          Can't wait to celebrate with you! 💕
        </p>
      </div>
    </div>
  );
};

export default BirthdayCountdown;
