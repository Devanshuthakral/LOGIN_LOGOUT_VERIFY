const LoadingSpinner = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
      <div className="w-16 h-16 border-4 border-t-4 border-t-green-500 border-green-200 rounded-full animate-spin" />
    </div>
  );
};

export default LoadingSpinner;