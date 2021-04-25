module.exports = {
  presets: ["@vue/app"],
  plugins: [
    [
      "import",
      { libraryName: "vant", libraryDirectory: "es", style: true}  //注意官网这里是style:true,这可能会导致报错。建议使用style:"css"
    ]
  ]
}
