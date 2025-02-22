const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <h2 className="text-8xl font-manrope font-extrabold text-transparent bg-gradient-to-tr from-indigo-600 to-pink-600 bg-clip-text flex items-center">
        L{" "}
        <div className="items-center justify-center rounded-2xl w-16 h-16 flex bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
          <div className="h-8 w-8 rounded-md bg-white "></div>
        </div>
        ading...
      </h2>
    </div>
  );
};

export default Loader;
