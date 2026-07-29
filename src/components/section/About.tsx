export default function About() {
  return (
    <section
      id="about"
      className="
        scroll-mt-24
        min-h-screen
        flex
        items-center
        bg-[#FAF3E1]
        px-6
        py-20
      "
    >
      <div
        className="
          mx-auto
          grid
          max-w-7xl
          gap-12
          md:grid-cols-2
          md:items-center
        "
      >

        {/* Left Content */}
        <div>

          <span
            className="
              inline-block
              rounded-full
              bg-[#F6E7C3]
              px-5
              py-2
              text-sm
              font-semibold
              text-[#264653]
            "
          >
            About Me
          </span>


          <h2
            className="
              mt-6
              font-heading
              text-4xl
              font-bold
              text-[#264653]
              md:text-5xl
            "
          >
            Building digital experiences
            with clean architecture
          </h2>


          <p
            className="
              mt-6
              text-lg
              leading-8
              text-[#264653]/70
            "
          >
            I am a Full-Stack Developer passionate about building
            scalable applications, reliable backend systems, and
            modern user experiences.
          </p>


          <p
            className="
              mt-4
              text-lg
              leading-8
              text-[#264653]/70
            "
          >
            My main focus is backend engineering with technologies
            like Go, NestJS, Node.js, and PostgreSQL while creating
            clean and responsive interfaces using React and Next.js.
          </p>


          <div className="mt-8 flex flex-wrap gap-3">

            <span
              className="
                rounded-2xl
                bg-[#2A9D8F]
                px-5
                py-2
                font-semibold
                text-white
                shadow-md
              "
            >
              Full-Stack Developer
            </span>


            <span
              className="
                rounded-2xl
                bg-white
                px-5
                py-2
                font-semibold
                text-[#264653]
                shadow-md
              "
            >
              Backend Focused
            </span>

          </div>

        </div>


        {/* Right Card */}
        <div
          className="
            flex
            justify-center
          "
        >

          <div
            className="
              relative
              h-80
              w-80
              rounded-3xl
              bg-[#264653]
              p-8
              shadow-xl
            "
          >

            <div
              className="
                absolute
                -right-6
                -top-6
                h-24
                w-24
                rounded-full
                bg-[#E9C46A]
              "
            />


            <div
              className="
                absolute
                -bottom-6
                -left-6
                h-20
                w-20
                rounded-full
                bg-[#E76F51]
              "
            />


            <div
              className="
                relative
                flex
                h-full
                flex-col
                items-center
                justify-center
                rounded-2xl
                border
                border-white/20
                text-center
                text-white
              "
            >

              <h3
                className="
                  font-heading
                  text-3xl
                  font-bold
                "
              >
                Jitu
              </h3>


              <p
                className="
                  mt-3
                  text-white/70
                "
              >
                Software Engineer
              </p>


              <p
                className="
                  mt-5
                  text-sm
                  text-[#CEF2EE]
                "
              >
                Go • React • Next.js
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}