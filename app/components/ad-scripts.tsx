const AdScripts = () => {
  return (
    <>
      {/* Googler Adsense */}
      {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=your_id"
        crossOrigin="anonymous"></script> */}

      {/* Google tag (gtag.js) */}
      {/* <script async src="https://www.googletagmanager.com/gtag/js?id=your_id"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'your_id');
        `}
      </script> */}

      {/* Adsterra Native Banner */}
      {/* <script async data-cfasync="false" src="your_js"></script> */}
    </>
  );
};

export { AdScripts };
