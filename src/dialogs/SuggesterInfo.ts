type SuggesterInfo = {
  field: string;
  code: string;
  desc: string;
  after: string;
};

export const EXCALIDRAW_AUTOMATE_INFO: SuggesterInfo[] = [
  {
    field: "plugin",
    code: null,
    desc: "The ExcalidrawPlugin object",
    after: "",
  },
  {
    field: "elementsDict",
    code: null,
    desc: "The {} dictionary object, contains the ExcalidrawElements currently edited in Automate indexed by el.id",
    after: '[""]',
  },
  {
    field: "imagesDict",
    code: null,
    desc: "the images files including DataURL, indexed by fileId",
    after: '[""]',
  },
  {
    field: "style.strokeColor",
    code: "[string]",
    desc: "A valid css color. See <a onclick='window.open(\"https://www.w3schools.com/colors/default.asp\")'>W3 School Colors</a> for more.",
    after: "",
  },
  {
    field: "style.backgroundColor",
    code: "[string]",
    desc: "A valid css color. See <a onclick='window.open(\"https://www.w3schools.com/colors/default.asp\")'>W3 School Colors</a> for more.",
    after: "",
  },
  {
    field: "style.angle",
    code: "[number]",
    desc: "Rotation of the object in radian",
    after: "",
  },
  {
    field: "style.fillStyle",
    code: "[string]",
    desc: "'hachure' | 'cross-hatch' | 'solid'",
    after: "",
  },
  {
    field: "style.strokeWidth",
    code: "[number]",
    desc: null,
    after: "",
  },
  {
    field: "style.strokeStyle",
    code: "[string]",
    desc: "'solid' | 'dashed' | 'dotted'",
    after: "",
  },
  {
    field: "style.roughness",
    code: "[number]",
    desc: "0:Architect\n1:Artist\n2:Cartoonist",
    after: "",
  },
  {
    field: "style.opacity",
    code: "[number]",
    desc: "100: Fully opaque\n0: Fully transparent",
    after: "",
  },
  {
    field: "style.roundness",
    code: "[null | { type: RoundnessType; value?: number };]",
    desc: "set to null for 'sharp', else the stroke will be 'round'<br>type: 1==LEGACY,<br>2==PROPORTIONAL RADIUS,<br>3==ADAPTIVE RADIUS, value: adaptive factor defaults to 32",
    after: "",
  },
  {
    field: "style.fontFamily",
    code: "[number]",
    desc: "1: Virgil, 2:Helvetica, 3:Cascadia, 4:LocalFont",
    after: "",
  },
  {
    field: "style.fontSize",
    code: "[number]",
    desc: null,
    after: "",
  },
  {
    field: "style.textAlign",
    code: "[string]",
    desc: "'left' | 'right' | 'center'",
    after: "",
  },
  {
    field: "style.verticalAlign",
    code: "[string]",
    desc: "For future use, has no effect currently; 'top' | 'bottom' | 'middle'",
    after: "",
  },
  {
    field: "style.startArrowHead",
    code: "[string]",
    desc: "'triangle' | 'dot' | 'arrow' | 'bar' | null",
    after: "",
  },
  {
    field: "style.endArrowHead",
    code: "[string]",
    desc: "'triangle' | 'dot' | 'arrow' | 'bar' | null",
    after: "",
  },
  {
    field: "canvas.theme",
    code: "[string]",
    desc: "'dark' | 'light'",
    after: "",
  },
  {
    field: "canvas.viewBackgroundColor",
    code: "[string]",
    desc: "A valid css color.\nSee <a onclick='window.open(\"https://www.w3schools.com/colors/default.asp\")'>W3 School Colors</a> for more.",
    after: "",
  },
  {
    field: "canvas.gridSize",
    code: "[number]",
    desc: null,
    after: "",
  },
  {
    field: "setStrokeSharpness",
    code: "setStrokeSharpness(sharpness: number): void;",
    desc: "Set ea.style.roundness. 0: is the legacy value, 3: is the current default value, null is sharp",
    after: "",
  },
  {
    field: "addToGroup",
    code: "addToGroup(objectIds: []): string;",
    desc: null,
    after: "",
  },
  {
    field: "toClipboard",
    code: "toClipboard(templatePath?: string): void;",
    desc: "Copies current elements using template to clipboard, ready to be pasted into an excalidraw canvas",
    after: "",
  },
  {
    field: "getSceneFromFile",
    code: "async getSceneFromFile(file: TFile): Promise<{elements: ExcalidrawElement[]; appState: AppState;}>;",
    desc: "returns the elements and appState from a file, if the file is not an excalidraw file, it will return null",
    after: "",
  },
  {
    field: "getElements",
    code: "getElements(): ExcalidrawElement[];",
    desc: "Get all elements from ExcalidrawAutomate elementsDict",
    after: "",
  },
  {
    field: "getElement",
    code: "getElement(id: string): ExcalidrawElement;",
    desc: "Get single element from ExcalidrawAutomate elementsDict",
    after: "",
  },
  {
    field: "create",
    code: 'create(params?: {filename?: string, foldername?: string, templatePath?: string, onNewPane?: boolean, silent?: boolean, frontmatterKeys?: { "excalidraw-plugin"?: "raw" | "parsed", "excalidraw-link-prefix"?: string, "excalidraw-link-brackets"?: boolean, "excalidraw-url-prefix"?: string,},}): Promise<string>;',
    desc: "Create a drawing and save it to filename.\nIf filename is null: default filename as defined in Excalidraw settings.\nIf folder is null: default folder as defined in Excalidraw settings\nReturns the path to the created file",
    after: "",
  },
  {
    field: "createSVG",
    code: "createSVG(templatePath?: string, embedFont?: boolean, exportSettings?: ExportSettings, loader?: EmbeddedFilesLoader, theme?: string,): Promise<SVGSVGElement>;",
    desc: "Use ExcalidrawAutomate.getExportSettings(boolean,boolean) to create an ExportSettings object.\nUse ExcalidrawAutomate.getEmbeddedFilesLoader(boolean?) to create an EmbeddedFilesLoader object.",
    after: "",
  },
  {
    field: "createPNG",
    code: "createPNG(templatePath?: string, scale?: number, exportSettings?: ExportSettings, loader?: EmbeddedFilesLoader, theme?: string,padding?: number): Promise<any>;",
    desc: "Create an image based on the objects in ea.getElements(). The elements in ea will be merged with the elements from the provided template file - if any. Use ExcalidrawAutomate.getExportSettings(boolean,boolean) to create an ExportSettings object.\nUse ExcalidrawAutomate.getEmbeddedFilesLoader(boolean?) to create an EmbeddedFilesLoader object.",
    after: "",
  },
  {
    field: "createPNGBase64",
    code: "craetePNGBase64(templatePath?: string, scale?: number, exportSettings?: ExportSettings, loader?: EmbeddedFilesLoader, theme?: string,padding?: number): Promise<string>;",
    desc: "The same as createPNG but returns a base64 encoded string instead of a file.",
    after: "",
  },
  {
    field: "wrapText",
    code: "wrapText(text: string, lineLen: number): string;",
    desc: null,
    after: "",
  },
  {
    field: "addRect",
    code: "addRect(topX: number, topY: number, width: number, height: number): string;",
    desc: null,
    after: "",
  },
  {
    field: "addDiamond",
    code: "addDiamond(topX: number, topY: number, width: number, height: number): string;",
    desc: null,
    after: "",
  },
  {
    field: "addEllipse",
    code: "addEllipse(topX: number, topY: number, width: number, height: number): string;",
    desc: null,
    after: "",
  },
  {
    field: "addBlob",
    code: "addBlob(topX: number, topY: number, width: number, height: number): string;",
    desc: null,
    after: "",
  },
  {
    field: "refreshTextElementSize",
    code: 'refreshTextElementSize(id: string);',
    desc: "Refreshes the size of the text element. Intended to be used when you copyViewElementsToEAforEditing() and then change the text in a text element and want to update the size of the text element to fit the modifid contents.",
    after: "",
  },
  {
    field: "addText",
    code: 'addText(topX: number, topY: number, text: string, formatting?: {wrapAt?: number; width?: number; height?: number; textAlign?: "left" | "center" | "right"; textVerticalAlign: "top" | "middle" | "bottom"; box?: boolean | "box" | "blob" | "ellipse" | "diamond"; boxPadding?: number; boxStrokeColor?: string;}, id?: string,): string;',
    desc: "If box is !null, then text will be boxed\nThe function returns the id of the TextElement. If the text element is boxed i.e. it is a sticky note, then the id of the container object",
    after: "",
  },
  {
    field: "addLine",
    code: "addLine(points: [[x: number, y: number]]): string;",
    desc: null,
    after: "",
  },
  {
    field: "addArrow",
    code: "addArrow(points: [[x: number, y: number]], formatting?: { startArrowHead?: string; endArrowHead?: string; startObjectId?: string; endObjectId?: string;},): string;",
    desc: null,
    after: "",
  },
  {
    field: "addImage",
    code: "addImage(topX: number, topY: number, imageFile: TFile, scale?: boolean, anchor?: boolean): Promise<string>;",
    desc: "set scale to false if you want to embed the image at 100% of its original size. Default is true which will insert a scaled image. anchor will only be evaluated if scale is false. anchor true will add |100% to the end of the filename, resulting in an image that will always pop back to 100% when the source file is updated or when the Excalidraw file is reopened. ",
    after: "",
  },
  {
    field: "addEmbeddable",
    code: "addEmbeddable(topX: number, topY: number, width: number, height: number, url?: string, file?: TFile): string;",
    desc: "Adds an iframe/webview (depending on content and platform) to the drawing. If url is not null then the iframe/webview will be loaded from the url. The url maybe a markdown link to an note in the Vault or a weblink. If url is null then the iframe/webview will be loaded from the file. Both the url and the file may not be null.",
    after: "",
  },
  {
    field: "addMermaid",
    code: "async addMermaid(diagram: string, groupElements: boolean = true,): Promise<string[]>;",
    desc: "Creates a mermaid diagram and returns the ids of the created elements as a string[]. The elements will be added to ea. To add them to the canvas you'll need to use addElementsToView. Depending on the diagram type the result will be either a single SVG image, or a number of excalidraw elements.",
    after: "",
  },
  {
    field: "addLaTex",
    code: "async addLaTex(topX: number, topY: number, tex: string): Promise<string>;",
    desc: "This is an async function, you need to avait the results. Adds a LaTex element to the drawing. The tex string is the LaTex code. The function returns the id of the created element.",
    after: "",
  },
  {
    field: "connectObjects",
    code: "connectObjects(objectA: string, connectionA: ConnectionPoint, objectB: string, connectionB: ConnectionPoint, formatting?: {numberOfPoints?: number; startArrowHead?: string; endArrowHead?: string; padding?: number;},): string;",
    desc: 'type ConnectionPoint = "top" | "bottom" | "left" | "right" | null\nWhen null is passed as ConnectionPoint then Excalidraw will automatically decide\nnumberOfPoints is the number of points on the line. Default is 0 i.e. line will only have a start and end point.\nArrowHead: "triangle"|"dot"|"arrow"|"bar"|null',
    after: "",
  },
  {
    field: "addLabelToLine",
    code: "addLabelToLine(lineId: string, label: string): string;",
    desc: 'Adds a text label to a line or arrow. Currently only works with a simple straight 2-point (start & end) line',
    after: "",
  }, 
  {
    field: "clear",
    code: "clear(): void;",
    desc: "Clears elementsDict and imagesDict only",
    after: "",
  },
  {
    field: "reset",
    code: "reset(): void;",
    desc: "clear() + reset all style values to default",
    after: "",
  },
  {
    field: "isExcalidrawFile",
    code: "isExcalidrawFile(f: TFile): boolean;",
    desc: "Returns true if MD file is an Excalidraw file",
    after: "",
  },
  {
    field: "targetView",
    code: "targetView: ExcalidrawView;",
    desc: "The Obsidian view currently edited",
    after: "",
  },
  {
    field: "setView",
    code: 'setView(view: ExcalidrawView | "first" | "active"): ExcalidrawView;',
    desc: null,
    after: "",
  },
  {
    field: "getExcalidrawAPI",
    code: "getExcalidrawAPI(): any;",
    desc: "<a onclick='window.open(\"https://github.com/excalidraw/excalidraw/tree/master/src/packages/excalidraw#ref\")'>Excalidraw API</a>",
    after: "",
  },
  {
    field: "getViewElements",
    code: "getViewElements(): ExcalidrawElement[];",
    desc: "Get elements in View",
    after: "",
  },
  {
    field: "deleteViewElements",
    code: "deleteViewElements(el: ExcalidrawElement[]): boolean;",
    desc: null,
    after: "",
  },
  {
    field: "getViewSelectedElement",
    code: "getViewSelectedElement(): ExcalidrawElement;",
    desc: "Get the selected element in the view, if more are selected, get the first",
    after: "",
  },
  {
    field: "getViewSelectedElements",
    code: "getViewSelectedElements(): ExcalidrawElement[];",
    desc: null,
    after: "",
  },
  {
    field: "getViewFileForImageElement",
    code: "getViewFileForImageElement(el: ExcalidrawElement): TFile | null;",
    desc: "Returns the TFile file handle for the image element",
    after: "",
  },
  {
    field: "copyViewElementsToEAforEditing",
    code: "copyViewElementsToEAforEditing(elements: ExcalidrawElement[], copyImages: boolean = false): void;",
    desc: "Copies elements from view to elementsDict for editing. If copyImages is true, then relevant entries from scene.files will also be copied. This is required if you want to generate a PNG for a subset of the elements in the drawing (e.g. for AI generation)",
    after: "",
  },
  {
    field: "viewToggleFullScreen",
    code: "viewToggleFullScreen(forceViewMode?: boolean): void;",
    desc: null,
    after: "",
  },
  {
    field: "connectObjectWithViewSelectedElement",
    code: "connectObjectWithViewSelectedElement(objectA: string, connectionA: ConnectionPoint, connectionB: ConnectionPoint, formatting?: {numberOfPoints?: number; startArrowHead?: string; endArrowHead?: string; padding?: number;},): boolean;",
    desc: "Connect an object to the selected element in the view\nSee tooltip for connectObjects for details",
    after: "",
  },
  {
    field: "addElementsToView",
    code: "addElementsToView(repositionToCursor?: boolean, save?: boolean, newElementsOnTop?: boolean,shouldRestoreElements?: boolean,): Promise<boolean>;",
    desc: "Adds elements from elementsDict to the current view\nrepositionToCursor: default is false\nsave: default is true\nnewElementsOnTop: default is false, i.e. the new elements get to the bottom of the stack\nnewElementsOnTop controls whether elements created with ExcalidrawAutomate are added at the bottom of the stack or the top of the stack of elements already in the view\nNote that elements copied to the view with copyViewElementsToEAforEditing retain their position in the stack of elements in the view even if modified using EA",
    after: "",
  },
  {
    field: "onDropHook",
    code: 'onDropHook(data: {ea: ExcalidrawAutomate, event: React.DragEvent<HTMLDivElement>, draggable: any, type: "file" | "text" | "unknown", payload: {files: TFile[], text: string,}, excalidrawFile: TFile, view: ExcalidrawView, pointerPosition: { x: number, y: number},}): boolean;',
    desc: "If set Excalidraw will call this function onDrop events.\nA return of true will stop the default onDrop processing in Excalidraw.\n\ndraggable is the Obsidian draggable object\nfiles is the array of dropped files\nexcalidrawFile is the file receiving the drop event\nview is the excalidraw view receiving the drop.\npointerPosition is the pointer position on canvas at the time of drop.",
    after: "",
  },
  {
    field: "mostRecentMarkdownSVG",
    code: "mostRecentMarkdownSVG: SVGSVGElement;",
    desc: "Markdown renderer will drop a copy of the most recent SVG here for debugging purposes",
    after: "",
  },
  {
    field: "getEmbeddedFilesLoader",
    code: "getEmbeddedFilesLoader(isDark?: boolean): EmbeddedFilesLoader;",
    desc: "Utility function to generate EmbeddedFilesLoader object",
    after: "",
  },
  {
    field: "getExportSettings",
    code: "getExportSettings(withBackground: boolean, withTheme: boolean,): ExportSettings;",
    desc: "Utility function to generate ExportSettings object",
    after: "",
  },
  {
    field: "getBoundingBox",
    code: "getBoundingBox(elements: ExcalidrawElement[]): {topX: number, topY: number, width: number, height: number,};",
    desc: "Gets the bounding box of elements. The bounding box is the box encapsulating all of the elements completely.",
    after: "",
  },
  {
    field: "getMaximumGroups",
    code: "getMaximumGroups(elements: ExcalidrawElement[]): ExcalidrawElement[][];",
    desc: "Elements grouped by the highest level groups",
    after: "",
  },
  {
    field: "getLargestElement",
    code: "getLargestElement(elements: ExcalidrawElement[]): ExcalidrawElement;",
    desc: "Gets the largest element from a group. useful when a text element is grouped with a box, and you want to connect an arrow to the box",
    after: "",
  },
  {
    field: "intersectElementWithLine",
    code: "intersectElementWithLine(element: ExcalidrawBindableElement, a: readonly [number, number], b: readonly [number, number], gap?: number,): Point[];",
    desc: "If gap is given, the element is inflated by this value.\nReturns 2 or 0 intersection points between line going through `a` and `b` and the `element`, in ascending order of distance from `a`.",
    after: "",
  },
  {
    field: "getCommonGroupForElements",
    code: "getCommonGroupForElements(elements: ExcalidrawElement[]): string;",
    desc: "Gets the groupId for the group that contains all the elements, or null if such a group does not exist",
    after: "",
  },
  {
    field: "getElementsInTheSameGroupWithElement",
    code: "getElementsInTheSameGroupWithElement(element: ExcalidrawElement, elements: ExcalidrawElement[]): ExcalidrawElement[];",
    desc: "Gets all the elements from elements[] that share one or more groupIds with element.",
    after: ""
  },
  {
    field: "activeScript",
    code: "activeScript: string;",
    desc: "Mandatory to set before calling the get and set ScriptSettings functions. Set automatically by the ScriptEngine\nSee for more details: <a onclick='window.open(\"https://zsviczian.github.io/obsidian-excalidraw-plugin/ExcalidrawScriptsEngine.html\")'>Script Engine Help</a>",
    after: "",
  },
  {
    field: "getScriptSettings",
    code: "getScriptSettings(): {};",
    desc: "Returns script settings. Saves settings in plugin settings, under the activeScript key. See for more details: <a onclick='window.open(\"https://zsviczian.github.io/obsidian-excalidraw-plugin/ExcalidrawScriptsEngine.html\")'>Script Engine Help</a>",
    after: "",
  },
  {
    field: "setScriptSettings",
    code: "setScriptSettings(settings: any): Promise<void>;",
    desc: "Sets script settings.\nSee for more details: <a onclick='window.open(\"https://zsviczian.github.io/obsidian-excalidraw-plugin/ExcalidrawScriptsEngine.html\")'>Script Engine Help</a>",
    after: "",
  },
  {
    field: "openFileInNewOrAdjacentLeaf",
    code: "openFileInNewOrAdjacentLeaf(file: TFile): WorkspaceLeaf;",
    desc: "Open a file in a new workspaceleaf or reuse an existing adjacent leaf depending on Excalidraw Plugin Settings",
    after: "",
  },
  {
    field: "measureText",
    code: "measureText(text: string): { width: number; height: number };",
    desc: "Measures text size based on current style settings",
    after: "",
  },
  {
    field: "verifyMinimumPluginVersion",
    code: "verifyMinimumPluginVersion(requiredVersion: string): boolean;",
    desc: 'Returns true if plugin version is >= than required\nrecommended use:\n<code>if(!ea.verifyMinimumPluginVersion || !ea.verifyMinimumPluginVersion("1.5.20")) {new Notice("message");return;}<code>',
    after: "",
  },
  {
    field: "selectElementsInView",
    code: "selectElementsInView(elements: ExcalidrawElement[] | string[]):void;",
    desc: "You can supply a list of Excalidraw Elements or the string IDs of those elements. The elements provided will be set as selected in the targetView.",
    after: "",
  },
  {
    field: "generateElementId",
    code: "generateElementId(): string;",
    desc: "Returns an 8 character long random id",
    after: "",
  },
  {
    field: "cloneElement",
    code: "cloneElement(element: ExcalidrawElement): ExcalidrawElement;",
    desc: "Returns a clone of the element with a new element id",
    after: "",
  },
  {
    field: "moveViewElementToZIndex",
    code: "moveViewElementToZIndex(elementId:number, newZIndex:number): void;",
    desc: "Moves the element to a specific position in the z-index",
    after: "",
  },
  {
    field: "hexStringToRgb",
    code: "hexStringToRgb(color: string):number[];",
    desc: "Converts a HEX color to an RGB number array. #FF0000 to [255,0,0]",
    after: "",
  },
  {
    field: "rgbToHexString",
    code: "rgbToHexString(color: number[]):string;",
    desc: "Converts an RGB number array to a HEX string. [255,0,0] to #FF0000",
    after: "",
  },
  {
    field: "hslToRgb",
    code: "hslToRgb(color: number[]):number[];",
    desc: "Converts an HSL number array to an RGB number array. [0,100,50] to [255,0,0]",
    after: "",
  },
  {
    field: "rgbToHsl",
    code: "rgbToHsl(color:number[]):number[];",
    desc: "Converts an RGB number array to an HSL number array. [255,0,0] to [0,100,50]",
    after: "",
  },
  {
    field: "colorNameToHex",
    code: "colorNameToHex(color:string):string;",
    desc: "Converts a CSS color name to its HEX color equivalent. 'White' to #FFFFFF",
    after: "",
  },
  {
    field: "obsidian",
    code: "obsidian",
    desc: "Access functions and objects available on the <a onclick='window.open(\"https://github.com/obsidianmd/obsidian-api/blob/master/obsidian.d.ts\")'>Obsidian Module</a>",
    after: "",
  },
  {
    field: "getAttachmentFilepath",
    code: "async getAttachmentFilepath(filename: string): Promise<string>",
    desc: "This asynchronous function should be awaited. It retrieves the filepath to a new file, taking into account the attachments preference settings in Obsidian. If the attachment folder doesn't exist, it creates it. The function returns the complete path to the file. If the provided filename already exists, the function will append '_[number]' before the extension to generate a unique filename.",
    after: "",
  },
  {
    field: "checkAndCreateFolder",
    code: "async checkAndCreateFolder(folderpath: string): Promise<TFolder>",
    desc: "Checks if the folder exists, if not, creates it.",
    after: "",
  },
  {
    field: "getNewUniqueFilepath",
    code: "getNewUniqueFilepath(filename: string, folderpath: string): string",
    desc: "Checks if the filepath already exists, if so, returns a new filepath with a number appended to the filename else returns the filepath as provided.",
    after: "",
  },
  {
    field: "extractCodeBlocks",
    code: "extractCodeBlocks(markdown: string): { data: string, type: string }[]",
    desc: "Grabs the codeblock content from the supplied markdown string. Returns an array of dictionaries with the codeblock content and type",
    after: "",
  },
  {
    field: "postOpenAI",
    code: "async postOpenAI(requst: AIRequest): Promise<RequestUrlResponse>",
    desc:
      "This asynchronous function should be awaited. It posts the supplied request to the OpenAI API and returns the response.<br>" +
      "The response is a dictionary with the following keys:<br><code>{image, text, instruction, systemPrompt}</code><br>"+
      "<b>image</b> should be a dataURL - use ea.createPNGBase64()<br>"+
      "<b>systemPrompt</b>: if <code>undefined</code> the message to OpenAI will not include a system prompt<br>"+
      "<b>text</b> is the actual user prompt, a request must have either an image or a text<br>"+
      "<b>instruction</b> is a user prompt sent as a separate element in the message - I use it to reinforce the type of response I am seeing (e.g. mermaid in a codeblock)<br>"+
      "RequestUrlResponse is defined in the <a onclick='window.open(\"https://github.com/obsidianmd/obsidian-api/blob/master/obsidian.d.ts\")'>Obsidian API</a>",
    after: "",
  },
  {
    field: "convertStringToDataURL",
    code: 'async convertStringToDataURL (data:string, type: string = "text/html"):Promise<string>',
    desc: "Converts a string to a DataURL.",
    after: "",
  },
  {
    field: "setViewModeEnabled",
    code: "setViewModeEnabled(enabled: boolean): void;",
    desc: "Sets Excalidraw in the targetView to view-mode",
    after: "",
  },
  {
    field: "viewUpdateScene",
    code: "viewUpdateScene(scene:{elements?:ExcalidrawElement[],appState?: AppState,files?: BinaryFileData,commitToHistory?: boolean,},restore:boolean=false):void",
    desc: "Calls the ExcalidrawAPI updateScene function for the targetView. When restore=true, excalidraw will try to correct errors in the scene such as setting default values to missing element properties.",
    after: "",
  },
  {
    field: "viewZoomToElements",
    code: "viewZoomToElements(selectElements: boolean,elements: ExcalidrawElement[]):void",
    desc: "Zoom tarteView to fit elements provided as input. elements === [] will zoom to fit the entire scene. SelectElements toggles whether the elements should be in a selected state at the end of the operation.",
    after: "",
  },
  {
    field: "compressToBase64",
    code: "compressToBase64(str: string):string",
    desc: "Compresses String to a Base64 string using LZString",
    after: "",
  },
  {
    field: "decompressFromBase64",
    code: "decompressFromBase64(str: string):string",
    desc: "Decompresses a base 64 compressed string using LZString",
    after: "",
  },
];

export const EXCALIDRAW_SCRIPTENGINE_INFO: SuggesterInfo[] = [
  {
    field: "inputPrompt",
    code: "inputPrompt: (header: string, placeholder?: string, value?: string, buttons?: {caption:string, tooltip?:string, action:Function}[], lines?: number, displayEditorButtons?: boolean, customComponents?: (container: HTMLElement) => void, blockPointerInputOutsideModal?: boolean);",
    desc:
      "Opens a prompt that asks for an input.\nReturns a string with the input.\nYou need to await the result of inputPrompt.\n" +
      "Editor buttons are text editing buttons like delete, enter, allcaps - these are only displayed if lines is greater than 1 \n" +
      "Custom components are components that you can add to the prompt. These will be displayed between the text input area and the buttons.\n" +
      "blockPointerInputOutsideModal will block pointer input outside the modal. This is useful if you want to prevent the user accidently closing the modal or interacting with the excalidraw canvas while the prompt is open.\n" +
      "buttons.action(input: string) => string\nThe button action function will receive the actual input string. If action returns null, input will be unchanged. If action returns a string, input will receive that value when the promise is resolved. " +
      "example:\n<code>let fileType = '';\nconst filename = await utils.inputPrompt (\n  'Filename',\n  '',\n  '',\n,  [\n    {\n      caption: 'Markdown',\n      action: ()=>{fileType='md';return;}\n    },\n    {\n      caption: 'Excalidraw',\n      action: ()=>{fileType='ex';return;}\n    }\n  ]\n);</code>",
    after: "",
  },
  {
    field: "suggester",
    code: "suggester: (displayItems: string[], items: any[], hint?: string, instructions?:Instruction[]);",
    desc: "Opens a suggester. Displays the displayItems and returns the corresponding item from items[]\nYou need to await the result of suggester.\nIf the user cancels (ESC), suggester will return undefined\nHint and instructions are optional\n\n<code>interface Instruction {command: string;purpose: string;}</code>",
    after: "",
  },
  {
    field: "scriptFile",
    code: "scriptFile: TFile",
    desc: "The TFile of the currently running script",
    after: "",
  },
];

export const FRONTMATTER_KEYS_INFO: SuggesterInfo[] = [
  {
    field: "plugin",
    code: null,
    desc: "Denotes an excalidraw file. If key is not present, the file will not be recognized as an Excalidarw file. Valid values are 'parsed' and 'raw'",
    after: ": parsed",
  },
  {
    field: "link-prefix",
    code: null,
    desc: "Set custom prefix to denote text element containing a valid internal link. Set to empty string if you do not want to show a prefix",
    after: ': "📍"',
  },
  {
    field: "url-prefix",
    code: null,
    desc: "Set custom prefix to denote text element containing a valid external link. Set to empty string if you do not want to show a prefix",
    after: ': "🌐"',
  },
  {
    field: "link-brackets",
    code: null,
    desc: "Set to true, if you want to display [[square brackets]] around the links in Text Elements",
    after: ": true",
  },
  {
    field: "default-mode",
    code: null,
    desc: "Specifies how Excalidraw should open by default. Valid values are: view|zen",
    after: ": view",
  },
  {
    field: "linkbutton-opacity",
    code: null,
    desc: "The opacity of the blue link button in the top right of the element overriding the respective setting in plugin settings. "+
      "Valid values are between 0 and 1, where 0 means the button is transparent.",
    after: ": 0.5",
  },
  {
    field: "onload-script",
    code: null,
    desc: "The value of this field will be executed as javascript code using the Script Engine environment. Use this to initiate custom actions or logic when loading your drawing.",
    after: ': "new Notice(`Hello World!\\n\\nFile: ${ea.targetView.file.basename}`);"',
  },
  {
    field: "font",
    code: null,
    desc: "This key applies to Markdown Embeds. You can control the appearance of the embedded markdown file on a file by file bases by adding the this frontmatter key to your markdown document. Valid values are: Virgil|Cascadia|font_file_name.extension",
    after: ": Virgil",
  },
  {
    field: "font-color",
    code: null,
    desc: "This key applies to Markdown Embeds. You can control the appearance of the embedded markdown file on a file by file bases by adding the this frontmatter key to your markdown document. Valid values are: css-color-name|#HEXcolor|any-other-html-standard-format",
    after: ": SteelBlue",
  },
  {
    field: "border-color",
    code: null,
    desc: "This key applies to Markdown Embeds. You can control the appearance of the embedded markdown file on a file by file bases by adding the this frontmatter key to your markdown document. Valid values are: css-color-name|#HEXcolor|any-other-html-standard-format",
    after: ": SteelBlue",
  },
  {
    field: "css",
    code: null,
    desc: 'This key applies to Markdown Embeds. You can control the appearance of the embedded markdown file on a file by file bases by adding the this front matter keys to your markdown document. Valid values are: "css-filename|css snippet"',
    after: ': ""',
  },
  {
    field: "export-transparent",
    code: null,
    desc: "If this key is present it will override the default excalidraw embed and export setting. true == Transparent / false == with background",
    after: ": true",
  },
  {
    field: "export-dark",
    code: null,
    desc: "If this key is present it will override the default excalidraw embed and export setting. true == Dark mode / false == light mode",
    after: ": true",
  },
  {
    field: "export-padding",
    code: null,
    desc: "If this key is present it will override the default excalidraw embed and export setting. This only affects both SVG and PNG export. Specify the export padding for the image.",
    after: ": 5",
  },
  {
    field: "export-pngscale",
    code: null,
    desc: "If this key is present it will override the default excalidraw embed and export setting. This only affects export to PNG. Specify the export scale for the image. The typical range is between 0.5 and 5, but you can experiment with other values as well.",
    after: ": 1",
  },
  {
    field: "autoexport",
    code: null,
    desc: "Override autoexport settings for this file. Valid values are\nnone\nboth\npng\nsvg",
    after: ": png",
  },
  {
    field: "iframe-theme",
    code: null,
    desc: "Override iFrame theme plugin-settings for this file. 'match' will match the Excalidraw theme, 'default' will match the obsidian theme. Valid values are\ndark\nlight\nauto\ndefault",
    after: ": auto",
  },

  
];
