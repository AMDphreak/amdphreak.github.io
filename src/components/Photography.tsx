export const Photography = () => {
  return (
    <div class="card">
      <div class="text-center mb-8">
        <h2 class="profile-title">
          Photography
        </h2>
        <p class="text-lg text-muted">
          Capturing Moments and Preserving Memories!
        </p>
      </div>

      <div class="space-y-6">
        <div class="flex flex-wrap justify-center gap-4">
          <a
            href="https://www.bigrpicture.com"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary btn-photography px-6 py-3"
          >
            <i class="fas fa-camera mr-2"></i>
            Photography Website
          </a>
          <a
            href="https://instagram.com/bigrpicture"
            target="_blank"
            rel="noopener noreferrer"
            class="instagram-btn"
          >
            <i class="fab fa-instagram mr-2"></i>
            @bigrpicture on Instagram
          </a>
        </div>

        <div class="text-center">
          <p class="text-muted max-w-2xl mx-auto">
            When I'm not coding, you'll find me behind the camera capturing the world around us. I have a photography business that focuses on events and personal projects that emphasize landscapes, urban scenes, and creative photography.
          </p>
        </div>

      </div>
    </div>
  );
};
