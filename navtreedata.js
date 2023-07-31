/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "3D Forest", "index.html", [
    [ "User Manual", "3d-forest-user-manual.html", [
      [ "Tools", "3d-forest-user-manual.html#tools", [
        [ "Classification Tool", "3d-forest-user-manual.html#tools-classification", [
          [ "Classification Overview", "3d-forest-user-manual.html#tools-classification-overview", null ],
          [ "Classification GUI", "3d-forest-user-manual.html#tools-classification-gui", null ],
          [ "Ground Classification Algorithm", "3d-forest-user-manual.html#tools-classification-algorithm", null ]
        ] ],
        [ "Descriptor Tool", "3d-forest-user-manual.html#tools-descriptor", [
          [ "Descriptor Tool Overview", "3d-forest-user-manual.html#tools-descriptor-overview", null ],
          [ "Descriptor Tool GUI", "3d-forest-user-manual.html#tools-descriptor-gui", null ],
          [ "Density Descriptor Algorithm", "3d-forest-user-manual.html#tools-descriptor-algorithm-density", null ],
          [ "PCA Intensity Descriptor Algorithm", "3d-forest-user-manual.html#tools-descriptor-algorithm-pca-intensity", null ]
        ] ],
        [ "Elevation Tool", "3d-forest-user-manual.html#tools-elevation", [
          [ "Elevation Overview", "3d-forest-user-manual.html#tools-elevation-overview", null ],
          [ "Elevation Tool GUI", "3d-forest-user-manual.html#tools-elevation-gui", null ],
          [ "3D Point Elevation Algorithm Above Ground", "3d-forest-user-manual.html#tools-elevation-algorithm", null ]
        ] ],
        [ "Automatic Segmentation Tool", "3d-forest-user-manual.html#tools-segmentation", [
          [ "Segmentation Overview", "3d-forest-user-manual.html#tools-segmentation-overview", null ],
          [ "Segmentation Steps", "3d-forest-user-manual.html#tools-segmentation-steps", null ],
          [ "Segmentation GUI", "3d-forest-user-manual.html#tools-segmentation-gui", null ],
          [ "Tree Segmentation Algorithm", "3d-forest-user-manual.html#tools-segmentation-algorithm", null ]
        ] ]
      ] ]
    ] ],
    [ "Developer Guide", "3d-forest-developer-guide.html", [
      [ "Git", "3d-forest-developer-guide.html#git", [
        [ "Get the Source Code", "3d-forest-developer-guide.html#git-get-code", null ],
        [ "Create New Branch", "3d-forest-developer-guide.html#git-create-branch", null ],
        [ "Merging Your Changes", "3d-forest-developer-guide.html#git-merging", null ],
        [ "Commands", "3d-forest-developer-guide.html#git-commands", null ]
      ] ],
      [ "Build from Source Code in Linux with \"Unix Makefiles\"", "3d-forest-developer-guide.html#build-linux-make", [
        [ "Install Qt", "3d-forest-developer-guide.html#build-linux-make-qt", null ],
        [ "Installation of other tools: OpenGL and CMake from a terminal", "3d-forest-developer-guide.html#build-linux-make-opengl", null ],
        [ "Installation of other tools: gcc, g++, make, libc6-dev, etc.", "3d-forest-developer-guide.html#build-linux-make-gcc", null ],
        [ "Build 3D Forest", "3d-forest-developer-guide.html#build-linux-make-3dforest", null ]
      ] ],
      [ "Build from Source Code in Mac OS with \"Unix Makefiles\"", "3d-forest-developer-guide.html#build-macos-make", [
        [ "Install Xcode", "3d-forest-developer-guide.html#build-macos-make-xcode", null ],
        [ "Install CMake", "3d-forest-developer-guide.html#build-macos-make-cmake", null ],
        [ "Install Qt", "3d-forest-developer-guide.html#build-macos-make-qt", null ],
        [ "Build 3D Forest", "3d-forest-developer-guide.html#build-macos-make-3d-forest", null ]
      ] ],
      [ "Build from Source Code in Windows with \"MinGW Makefiles\"", "3d-forest-developer-guide.html#build-windows-make", [
        [ "Install git", "3d-forest-developer-guide.html#build-windows-make-git", null ],
        [ "Install msys2 and mingw-w64", "3d-forest-developer-guide.html#build-windows-make-mingw", null ],
        [ "Install Qt", "3d-forest-developer-guide.html#build-windows-make-qt", null ],
        [ "Build 3D Forest", "3d-forest-developer-guide.html#build-windows-make-3dforest", null ]
      ] ],
      [ "Build from Source Code in Windows with Visual Studio", "3d-forest-developer-guide.html#build-windows-visual-studio", [
        [ "Install git", "3d-forest-developer-guide.html#build-windows-visual-studio-git", null ],
        [ "Install Visual Studio", "3d-forest-developer-guide.html#build-windows-visual-studio-ide", null ],
        [ "Install Qt", "3d-forest-developer-guide.html#build-windows-visual-studio-qt", null ],
        [ "Build 3D Forest", "3d-forest-developer-guide.html#build-windows-visual-studio-3dforest", null ]
      ] ],
      [ "Add New Functionality", "3d-forest-developer-guide.html#add-new-functionality", [
        [ "Plugins", "3d-forest-developer-guide.html#add-new-functionality-plugins", null ],
        [ "Tools", "3d-forest-developer-guide.html#add-new-functionality-tools", null ],
        [ "Internal Plugins", "3d-forest-developer-guide.html#add-new-functionality-internal-plugins", null ],
        [ "Extend Core Functionality", "3d-forest-developer-guide.html#add-new-functionality-extend-core-functionality", null ],
        [ "General", "3d-forest-developer-guide.html#add-new-functionality-general", null ]
      ] ],
      [ "Code Format Suggestions", "3d-forest-developer-guide.html#code-format", [
        [ "Automatic Code Formatting", "3d-forest-developer-guide.html#code-format-automatic", null ],
        [ "Names", "3d-forest-developer-guide.html#code-format-names", null ],
        [ "File Names", "3d-forest-developer-guide.html#code-format-file-names", null ]
      ] ],
      [ "Logging", "3d-forest-developer-guide.html#logging", null ],
      [ "Doxygen", "3d-forest-developer-guide.html#doxygen", null ],
      [ "Generate Help Manuals", "3d-forest-developer-guide.html#generate-help-manuals", null ],
      [ "Adding Third Party Libraries", "3d-forest-developer-guide.html#adding-3rd-party-library", null ],
      [ "Cheat Sheet", "3d-forest-developer-guide.html#cheatsheet", [
        [ "CMake Build Script", "3d-forest-developer-guide.html#cheatsheet-cmake", null ],
        [ "Qt Designer", "3d-forest-developer-guide.html#cheatsheet-qtdesigner", null ],
        [ "Rename Files", "3d-forest-developer-guide.html#cheatsheet-rename-files", null ],
        [ "Edit Source Code with Visual Studio Code", "3d-forest-developer-guide.html#cheatsheet-vscode-edit", null ],
        [ "Build and Debug in Visual Studio Code", "3d-forest-developer-guide.html#cheatsheet-vscode-debug", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Functions", "functions_rela.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"3d-forest-developer-guide.html",
"classCone.html#a1302e82074a4da1d63ee5dbd0350a2b2",
"classEditor.html#a9ecda11933059d31ea06105810011dee",
"classExplorerLayersWidget.html#ab3911e8ee0c701a792ea67271a8a3535",
"classIndexFile.html#a1adaef1617cbfd2d24b0b489661362d7",
"classLasFile.html#ae02cfc5614e4620601a51f01439e0905",
"classPage.html#a40bbacd4e58818a225f0eca420691ec2",
"classQuery.html#aa0db33f35f4bb68ada5c356a57204424",
"classSettingsColorWidget.html#aeeb03a843ad2137291c2d6ca6879246b",
"classVectorFile.html#abb0c95b1666de4dc36ce1cd122a37f10",
"functions_func_g.html"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';