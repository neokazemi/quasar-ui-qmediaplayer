(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0cb698"],{"4a0e":function(e,n,i){"use strict";i.r(n),n["default"]='<template>\n  <div>\n    <q-input v-model="media" filled clearable type="file" style="width: 50%;" class="q-pa-md"/>\n    <q-media-player\n      type="video"\n      ref="mediaplayer"\n      autoplay\n      :source="itemUrl"\n    />\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      media: null,\n      itemUrl: null\n    }\n  },\n  watch: {\n    media (fileList) {\n      if (fileList && fileList.length > 0) {\n        this.loadFileBlob(fileList)\n      }\n    }\n  },\n  methods: {\n    loadFileBlob (fileList) {\n      this.$refs.mediaplayer.loadFileBlob(fileList)\n    }\n  }\n}\n<\/script>\n'}}]);