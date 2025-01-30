export const getRandomColor = () => {
    const colors = [
      'text-blue-500',
      'text-red-500',
      'text-green-500',
      'text-purple-500',
      'text-pink-500',
      'text-indigo-500',
      'text-yellow-500',
      'text-teal-500',
      'text-rose-500',
      'text-amber-500',
      'text-lime-500',
      'text-emerald-500',
      'text-cyan-500',
      'text-violet-500',
      'text-fuchsia-500',
      'text-orange-500',
      'text-blue-400',
      'text-red-400',
      'text-green-400',
      'text-purple-400',
      'text-pink-400',
      'text-indigo-400',
      'text-rose-600',
      'text-amber-600',
      'text-emerald-600',
      'text-violet-600',
      'text-sky-600',
      'text-orange-600'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };