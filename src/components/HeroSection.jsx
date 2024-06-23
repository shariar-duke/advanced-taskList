export default function HeroSection() {
  return (
    <section className="flex justify-between">
      <div className="flex justify-center items-center">
        <div className="text-white">
          <h1 className="mb-[8px] text-[56px] font-bold leading-none lg:text-[60px] text-[#F5BF42]">
            Tasker
          </h1>
          <p className="opacity-70 text-lg">
            Effortlessly Organize , Preoritize , Conquer Task with Taskbar -
            Your Personal Productivity <br /> for seamless Goal Acheivement and
            Stress-free Task Management
          </p>
        </div>
      </div>

      <img src="/public/frame.png" alt="hero-img" />
    </section>
  );
}
