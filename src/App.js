import { ThemeProvider } from './context/ThemeContext';
import CV from './components/CV';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-hidden">
        {/* Simple Gradient Background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-950 dark:to-slate-900" />
        </div>

        <div className="relative z-10">
          <CV />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
