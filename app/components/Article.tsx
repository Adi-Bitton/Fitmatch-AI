export default function Article() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-6 py-7 sm:px-8 sm:py-9 lg:py-14">
      <h2 className="mx-auto mb-8 max-w-[720px] text-center text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
        רוצים להכיר את הסיפור קצת יותר מקרוב?
      </h2>

      <div className="panel mx-auto max-w-[1000px] overflow-hidden p-0">
        <div className="relative aspect-video w-full">
          <iframe
            src="https://www.youtube.com/embed/cbSBvXPicU0?start=1738"
            title="FITMATCH AI - כתבה"
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
