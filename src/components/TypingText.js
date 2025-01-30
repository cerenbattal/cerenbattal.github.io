import { Typewriter } from 'react-simple-typewriter';

const TypingText = () => {
  return (
    <div className="text-xl text-gray-600 dark:text-gray-300 mb-6">
      <span className="mr-2">I am</span>
      <span className="font-semibold text-blue-600 dark:text-blue-400">
        <Typewriter
          words={[
            'a Frontend Developer.',
            'passionate about React.',
            'experienced in modern web technologies.',
            'always learning new things.'
          ]}
          loop={true}
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </div>
  );
}

export default TypingText;