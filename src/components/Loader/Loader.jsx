function Loader() {
  return (
    <div className="flex justify-center items-center h-screen bg-[#141414]">

      <div className="flex gap-3">

        <span className="w-4 h-4 rounded-full bg-red-600 animate-bounce"></span>

        <span
          className="w-4 h-4 rounded-full bg-red-600 animate-bounce"
          style={{ animationDelay: "0.2s" }}
        ></span>

        <span
          className="w-4 h-4 rounded-full bg-red-600 animate-bounce"
          style={{ animationDelay: "0.4s" }}
        ></span>

      </div>

    </div>
  );
}

export default Loader;