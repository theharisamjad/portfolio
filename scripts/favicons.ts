import favicons, { FaviconResponse } from "favicons";
import fs from 'fs';

const source = "config/profile.png"; // Source image(s). `string`, `buffer` or array of `string`

const configuration = {
  path: "/", // Path for overriding default icons path. `string`
  appName: undefined, // Your application's name. `string`
  appShortName: undefined, // Your application's short_name. `string`. Optional. If not set, appName will be used
  appDescription: undefined, // Your application's description. `string`
  developerName: undefined, // Your (or your developer's) name. `string`
  developerURL: undefined, // Your (or your developer's) URL. `string`
  dir: "auto", // Primary text direction for name, short_name, and description
  lang: "en-US", // Primary language for name and short_name
  background: "#fff", // Background colour for flattened icons. `string`
  theme_color: "#fff", // Theme color user for example in Android's task switcher. `string`
  appleStatusBarStyle: "black-translucent", // Style for Apple status bar: "black-translucent", "default", "black". `string`
  display: "standalone", // Preferred display mode: "fullscreen", "standalone", "minimal-ui" or "browser". `string`
  orientation: "any", // Default orientation: "any", "natural", "portrait" or "landscape". `string`
  scope: "/", // set of URLs that the browser considers within your app
  start_url: "/?homescreen=1", // Start URL when launching the application from a device. `string`
  version: "1.0", // Your application's version string. `string`
  logging: false, // Print logs to console? `boolean`
  pixel_art: false, // Keeps pixels "sharp" when scaling up, for pixel art.  Only supported in offline mode.
  loadManifestWithCredentials: false, // Browsers don't send cookies when fetching a manifest, enable this to fix that. `boolean`
  icons: {
    android: false, // Create Android homescreen icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
    appleIcon: false, // Create Apple touch icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
    appleStartup: false, // Create Apple startup images. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
    coast: false, // Create Opera Coast icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
    favicons: ['favicon.ico'], // Create regular favicons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
    firefox: false, // Create Firefox OS icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
    windows: false, // Create Windows 8 tile icons. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
    yandex: false, // Create Yandex browser icon. `boolean` or `{ offset, background, mask, overlayGlow, overlayShadow }` or an array of sources
  },
};

const createFile = (path: string, content: Buffer | string) => {
  fs.writeFile(path, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`${path} created`);
    }
  });
};

const callback = (response: FaviconResponse) => {

  // console.log(response.images); // Array of { name: string, contents: <buffer> }
  // console.log(response.files); // Array of { name: string, contents: <string> }
  // console.log(response.html); // Array of strings (html elements)

  // createFile("index.html", response.html.join('\n'));
  // response.files.forEach(element => {
  //   createFile(element.name, element.contents);
  // });
  response.images.forEach((element: { name: string; contents: string | Buffer<ArrayBufferLike>; }) => {
    createFile('public/' + element.name, element.contents);
  });

  console.log("Successfully created favicons");
};

console.log('Generating favicons...');
favicons(source, configuration)
  .then((response: FaviconResponse) => {
    callback(response)
  })
  .catch((error: Error) => {
    console.error(error.message); // Error description e.g. "An unknown error has occurred"
    return;
  });
