(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, variant, size, asChild = false, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/button.tsx",
        lineNumber: 43,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Button;
Button.displayName = "Button";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Button$React.forwardRef");
__turbopack_context__.k.register(_c1, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/input.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 10,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Input;
Input.displayName = "Input";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Input$React.forwardRef");
__turbopack_context__.k.register(_c1, "Input");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/label.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 16,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Label;
Label.displayName = "Label";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Label$React.forwardRef");
__turbopack_context__.k.register(_c1, "Label");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/select.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
"use client";
;
;
;
;
const Select = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, children, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full appearance-none rounded-md border border-input bg-background px-3 py-2 pr-8 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
                ref: ref,
                ...props,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                className: "absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 opacity-50 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/select.tsx",
        lineNumber: 15,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
_c1 = Select;
Select.displayName = "Select";
;
var _c, _c1;
__turbopack_context__.k.register(_c, "Select$React.forwardRef");
__turbopack_context__.k.register(_c1, "Select");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/card.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Card",
    ()=>Card,
    "CardContent",
    ()=>CardContent,
    "CardDescription",
    ()=>CardDescription,
    "CardFooter",
    ()=>CardFooter,
    "CardHeader",
    ()=>CardHeader,
    "CardTitle",
    ()=>CardTitle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 8,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 35,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 50,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"](_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 70,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/(admin)/certificates/data:102b8b [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createCertificate",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6089eb637b9f35111abd89de185e1dabd3abb17559":"createCertificate"},"src/app/(admin)/certificates/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6089eb637b9f35111abd89de185e1dabd3abb17559", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createCertificate");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVTZWN1cml0eUlkIH0gZnJvbSBcIkAvbGliL3NlY3VyaXR5LWlkXCI7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbmNvbnN0IGNlcnRpZmljYXRlU2NoZW1hID0gei5vYmplY3Qoe1xuICBzdGFrZWhvbGRlcklkOiB6LnN0cmluZygpLm1pbigxLCBcIlN0YWtlaG9sZGVyIGlzIHJlcXVpcmVkXCIpLFxuICBzaGFyZUNsYXNzSWQ6IHouc3RyaW5nKCkubWluKDEsIFwiU2hhcmUgY2xhc3MgaXMgcmVxdWlyZWRcIiksXG4gIHF1YW50aXR5OiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZShcIlF1YW50aXR5IG11c3QgYmUgcG9zaXRpdmVcIiksXG4gIHByaWNlUGVyU2hhcmU6IHouY29lcmNlLm51bWJlcigpLnBvc2l0aXZlKFwiUHJpY2UgbXVzdCBiZSBwb3NpdGl2ZVwiKSxcbiAgY2FzaFBhaWQ6IHouY29lcmNlLm51bWJlcigpLm1pbigwLCBcIkNhc2ggcGFpZCBjYW5ub3QgYmUgbmVnYXRpdmVcIiksXG4gIGNvc3RCYXNpczogei5jb2VyY2UubnVtYmVyKCkubWluKDApLm9wdGlvbmFsKCksXG4gIGFjcXVpc2l0aW9uRGF0ZTogei5zdHJpbmcoKS5taW4oMSwgXCJBY3F1aXNpdGlvbiBkYXRlIGlzIHJlcXVpcmVkXCIpLFxuICBpc3N1ZURhdGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3JpZ2luYWxJc3N1ZURhdGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgc3RhdHVzOiB6LmVudW0oW1wiT1VUU1RBTkRJTkdcIiwgXCJDQU5DRUxMRURcIiwgXCJUUkFOU0ZFUlJFRFwiLCBcIlJFUFVSQ0hBU0VEXCJdKS5kZWZhdWx0KFwiT1VUU1RBTkRJTkdcIiksXG59KTtcblxuZXhwb3J0IHR5cGUgQ2VydGlmaWNhdGVGb3JtU3RhdGUgPSB7XG4gIGVycm9ycz86IHtcbiAgICBzdGFrZWhvbGRlcklkPzogc3RyaW5nW107XG4gICAgc2hhcmVDbGFzc0lkPzogc3RyaW5nW107XG4gICAgcXVhbnRpdHk/OiBzdHJpbmdbXTtcbiAgICBwcmljZVBlclNoYXJlPzogc3RyaW5nW107XG4gICAgY2FzaFBhaWQ/OiBzdHJpbmdbXTtcbiAgICBjb3N0QmFzaXM/OiBzdHJpbmdbXTtcbiAgICBhY3F1aXNpdGlvbkRhdGU/OiBzdHJpbmdbXTtcbiAgICBpc3N1ZURhdGU/OiBzdHJpbmdbXTtcbiAgICBzdGF0dXM/OiBzdHJpbmdbXTtcbiAgICBfZm9ybT86IHN0cmluZ1tdO1xuICB9O1xuICBtZXNzYWdlPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNlcnRpZmljYXRlKFxuICBwcmV2U3RhdGU6IENlcnRpZmljYXRlRm9ybVN0YXRlLFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8Q2VydGlmaWNhdGVGb3JtU3RhdGU+IHtcbiAgY29uc3QgY29tcGFueSA9IGF3YWl0IHByaXNtYS5jb21wYW55LmZpbmRGaXJzdCgpO1xuICBpZiAoIWNvbXBhbnkpIHtcbiAgICByZXR1cm4geyBlcnJvcnM6IHsgX2Zvcm06IFtcIk5vIGNvbXBhbnkgZm91bmRcIl0gfSB9O1xuICB9XG5cbiAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gY2VydGlmaWNhdGVTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICBzdGFrZWhvbGRlcklkOiBmb3JtRGF0YS5nZXQoXCJzdGFrZWhvbGRlcklkXCIpLFxuICAgIHNoYXJlQ2xhc3NJZDogZm9ybURhdGEuZ2V0KFwic2hhcmVDbGFzc0lkXCIpLFxuICAgIHF1YW50aXR5OiBmb3JtRGF0YS5nZXQoXCJxdWFudGl0eVwiKSxcbiAgICBwcmljZVBlclNoYXJlOiBmb3JtRGF0YS5nZXQoXCJwcmljZVBlclNoYXJlXCIpLFxuICAgIGNhc2hQYWlkOiBmb3JtRGF0YS5nZXQoXCJjYXNoUGFpZFwiKSxcbiAgICBjb3N0QmFzaXM6IGZvcm1EYXRhLmdldChcImNvc3RCYXNpc1wiKSB8fCBmb3JtRGF0YS5nZXQoXCJjYXNoUGFpZFwiKSxcbiAgICBhY3F1aXNpdGlvbkRhdGU6IGZvcm1EYXRhLmdldChcImFjcXVpc2l0aW9uRGF0ZVwiKSxcbiAgICBpc3N1ZURhdGU6IGZvcm1EYXRhLmdldChcImlzc3VlRGF0ZVwiKSxcbiAgICBvcmlnaW5hbElzc3VlRGF0ZTogZm9ybURhdGEuZ2V0KFwib3JpZ2luYWxJc3N1ZURhdGVcIiksXG4gICAgc3RhdHVzOiBmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgfHwgXCJPVVRTVEFORElOR1wiLFxuICB9KTtcblxuICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yczogdmFsaWRhdGVkRmllbGRzLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgZGF0YSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xuXG4gIHRyeSB7XG4gICAgLy8gR2VuZXJhdGUgc2VjdXJpdHkgSURcbiAgICBjb25zdCBzZWN1cml0eUlkID0gYXdhaXQgZ2VuZXJhdGVTZWN1cml0eUlkKFwiQ1NcIiwgY29tcGFueS5pZCk7XG5cbiAgICAvLyBDcmVhdGUgY2VydGlmaWNhdGVcbiAgICBjb25zdCBjZXJ0aWZpY2F0ZSA9IGF3YWl0IHByaXNtYS5zaGFyZUNlcnRpZmljYXRlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvbXBhbnlJZDogY29tcGFueS5pZCxcbiAgICAgICAgc2VjdXJpdHlJZCxcbiAgICAgICAgc3Rha2Vob2xkZXJJZDogZGF0YS5zdGFrZWhvbGRlcklkLFxuICAgICAgICBzaGFyZUNsYXNzSWQ6IGRhdGEuc2hhcmVDbGFzc0lkLFxuICAgICAgICBxdWFudGl0eTogZGF0YS5xdWFudGl0eSxcbiAgICAgICAgcHJpY2VQZXJTaGFyZTogZGF0YS5wcmljZVBlclNoYXJlLFxuICAgICAgICBjYXNoUGFpZDogZGF0YS5jYXNoUGFpZCxcbiAgICAgICAgY29zdEJhc2lzOiBkYXRhLmNvc3RCYXNpcyA/PyBkYXRhLmNhc2hQYWlkLFxuICAgICAgICBhY3F1aXNpdGlvbkRhdGU6IG5ldyBEYXRlKGRhdGEuYWNxdWlzaXRpb25EYXRlKSxcbiAgICAgICAgaXNzdWVEYXRlOiBkYXRhLmlzc3VlRGF0ZSA/IG5ldyBEYXRlKGRhdGEuaXNzdWVEYXRlKSA6IG5ldyBEYXRlKCksXG4gICAgICAgIG9yaWdpbmFsSXNzdWVEYXRlOiBkYXRhLm9yaWdpbmFsSXNzdWVEYXRlXG4gICAgICAgICAgPyBuZXcgRGF0ZShkYXRhLm9yaWdpbmFsSXNzdWVEYXRlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgYXVkaXQgbG9nXG4gICAgYXdhaXQgcHJpc21hLmF1ZGl0TG9nLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvbXBhbnlJZDogY29tcGFueS5pZCxcbiAgICAgICAgYWN0aW9uOiBcIkNSRUFURVwiLFxuICAgICAgICBlbnRpdHlUeXBlOiBcIlNoYXJlQ2VydGlmaWNhdGVcIixcbiAgICAgICAgZW50aXR5SWQ6IGNlcnRpZmljYXRlLmlkLFxuICAgICAgICBhZnRlcjogY2VydGlmaWNhdGUgYXMgYW55LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2NlcnRpZmljYXRlc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9jYXAtdGFibGVcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBjZXJ0aWZpY2F0ZTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yczogeyBfZm9ybTogW1wiRmFpbGVkIHRvIGNyZWF0ZSBjZXJ0aWZpY2F0ZVwiXSB9IH07XG4gIH1cblxuICByZWRpcmVjdChcIi9jZXJ0aWZpY2F0ZXNcIik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDZXJ0aWZpY2F0ZShcbiAgaWQ6IHN0cmluZyxcbiAgcHJldlN0YXRlOiBDZXJ0aWZpY2F0ZUZvcm1TdGF0ZSxcbiAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPENlcnRpZmljYXRlRm9ybVN0YXRlPiB7XG4gIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLnNoYXJlQ2VydGlmaWNhdGUuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQgfSxcbiAgfSk7XG5cbiAgaWYgKCFleGlzdGluZykge1xuICAgIHJldHVybiB7IGVycm9yczogeyBfZm9ybTogW1wiQ2VydGlmaWNhdGUgbm90IGZvdW5kXCJdIH0gfTtcbiAgfVxuXG4gIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IGNlcnRpZmljYXRlU2NoZW1hLnNhZmVQYXJzZSh7XG4gICAgc3Rha2Vob2xkZXJJZDogZm9ybURhdGEuZ2V0KFwic3Rha2Vob2xkZXJJZFwiKSxcbiAgICBzaGFyZUNsYXNzSWQ6IGZvcm1EYXRhLmdldChcInNoYXJlQ2xhc3NJZFwiKSxcbiAgICBxdWFudGl0eTogZm9ybURhdGEuZ2V0KFwicXVhbnRpdHlcIiksXG4gICAgcHJpY2VQZXJTaGFyZTogZm9ybURhdGEuZ2V0KFwicHJpY2VQZXJTaGFyZVwiKSxcbiAgICBjYXNoUGFpZDogZm9ybURhdGEuZ2V0KFwiY2FzaFBhaWRcIiksXG4gICAgY29zdEJhc2lzOiBmb3JtRGF0YS5nZXQoXCJjb3N0QmFzaXNcIikgfHwgZm9ybURhdGEuZ2V0KFwiY2FzaFBhaWRcIiksXG4gICAgYWNxdWlzaXRpb25EYXRlOiBmb3JtRGF0YS5nZXQoXCJhY3F1aXNpdGlvbkRhdGVcIiksXG4gICAgaXNzdWVEYXRlOiBmb3JtRGF0YS5nZXQoXCJpc3N1ZURhdGVcIiksXG4gICAgb3JpZ2luYWxJc3N1ZURhdGU6IGZvcm1EYXRhLmdldChcIm9yaWdpbmFsSXNzdWVEYXRlXCIpLFxuICAgIHN0YXR1czogZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIHx8IFwiT1VUU1RBTkRJTkdcIixcbiAgfSk7XG5cbiAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcblxuICB0cnkge1xuICAgIGNvbnN0IGNlcnRpZmljYXRlID0gYXdhaXQgcHJpc21hLnNoYXJlQ2VydGlmaWNhdGUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHN0YWtlaG9sZGVySWQ6IGRhdGEuc3Rha2Vob2xkZXJJZCxcbiAgICAgICAgc2hhcmVDbGFzc0lkOiBkYXRhLnNoYXJlQ2xhc3NJZCxcbiAgICAgICAgcXVhbnRpdHk6IGRhdGEucXVhbnRpdHksXG4gICAgICAgIHByaWNlUGVyU2hhcmU6IGRhdGEucHJpY2VQZXJTaGFyZSxcbiAgICAgICAgY2FzaFBhaWQ6IGRhdGEuY2FzaFBhaWQsXG4gICAgICAgIGNvc3RCYXNpczogZGF0YS5jb3N0QmFzaXMgPz8gZGF0YS5jYXNoUGFpZCxcbiAgICAgICAgYWNxdWlzaXRpb25EYXRlOiBuZXcgRGF0ZShkYXRhLmFjcXVpc2l0aW9uRGF0ZSksXG4gICAgICAgIGlzc3VlRGF0ZTogZGF0YS5pc3N1ZURhdGUgPyBuZXcgRGF0ZShkYXRhLmlzc3VlRGF0ZSkgOiB1bmRlZmluZWQsXG4gICAgICAgIG9yaWdpbmFsSXNzdWVEYXRlOiBkYXRhLm9yaWdpbmFsSXNzdWVEYXRlXG4gICAgICAgICAgPyBuZXcgRGF0ZShkYXRhLm9yaWdpbmFsSXNzdWVEYXRlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgYXVkaXQgbG9nXG4gICAgYXdhaXQgcHJpc21hLmF1ZGl0TG9nLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvbXBhbnlJZDogZXhpc3RpbmcuY29tcGFueUlkLFxuICAgICAgICBhY3Rpb246IFwiVVBEQVRFXCIsXG4gICAgICAgIGVudGl0eVR5cGU6IFwiU2hhcmVDZXJ0aWZpY2F0ZVwiLFxuICAgICAgICBlbnRpdHlJZDogY2VydGlmaWNhdGUuaWQsXG4gICAgICAgIGJlZm9yZTogZXhpc3RpbmcgYXMgYW55LFxuICAgICAgICBhZnRlcjogY2VydGlmaWNhdGUgYXMgYW55LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2NlcnRpZmljYXRlc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL2NlcnRpZmljYXRlcy8ke2lkfWApO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2NhcC10YWJsZVwiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGNlcnRpZmljYXRlOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgZXJyb3JzOiB7IF9mb3JtOiBbXCJGYWlsZWQgdG8gdXBkYXRlIGNlcnRpZmljYXRlXCJdIH0gfTtcbiAgfVxuXG4gIHJlZGlyZWN0KGAvY2VydGlmaWNhdGVzLyR7aWR9YCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDZXJ0aWZpY2F0ZShpZDogc3RyaW5nKSB7XG4gIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLnNoYXJlQ2VydGlmaWNhdGUuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQgfSxcbiAgfSk7XG5cbiAgaWYgKCFleGlzdGluZykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNlcnRpZmljYXRlIG5vdCBmb3VuZFwiKTtcbiAgfVxuXG4gIC8vIFNvZnQgZGVsZXRlIGJ5IGNoYW5naW5nIHN0YXR1cyB0byBDQU5DRUxMRURcbiAgYXdhaXQgcHJpc21hLnNoYXJlQ2VydGlmaWNhdGUudXBkYXRlKHtcbiAgICB3aGVyZTogeyBpZCB9LFxuICAgIGRhdGE6IHsgc3RhdHVzOiBcIkNBTkNFTExFRFwiIH0sXG4gIH0pO1xuXG4gIC8vIENyZWF0ZSBhdWRpdCBsb2dcbiAgYXdhaXQgcHJpc21hLmF1ZGl0TG9nLmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgY29tcGFueUlkOiBleGlzdGluZy5jb21wYW55SWQsXG4gICAgICBhY3Rpb246IFwiREVMRVRFXCIsXG4gICAgICBlbnRpdHlUeXBlOiBcIlNoYXJlQ2VydGlmaWNhdGVcIixcbiAgICAgIGVudGl0eUlkOiBpZCxcbiAgICAgIGJlZm9yZTogZXhpc3RpbmcgYXMgYW55LFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldmFsaWRhdGVQYXRoKFwiL2NlcnRpZmljYXRlc1wiKTtcbiAgcmV2YWxpZGF0ZVBhdGgoXCIvY2FwLXRhYmxlXCIpO1xuICByZXZhbGlkYXRlUGF0aChcIi9cIik7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjZTQXFDc0IsOExBQUEifQ==
}),
"[project]/src/app/(admin)/certificates/data:133dbd [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateCertificate",
    ()=>$$RSC_SERVER_ACTION_1
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"7090bb40905a5b3c320768549f29e12830de9b9baa":"updateCertificate"},"src/app/(admin)/certificates/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("7090bb40905a5b3c320768549f29e12830de9b9baa", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateCertificate");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVTZWN1cml0eUlkIH0gZnJvbSBcIkAvbGliL3NlY3VyaXR5LWlkXCI7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbmNvbnN0IGNlcnRpZmljYXRlU2NoZW1hID0gei5vYmplY3Qoe1xuICBzdGFrZWhvbGRlcklkOiB6LnN0cmluZygpLm1pbigxLCBcIlN0YWtlaG9sZGVyIGlzIHJlcXVpcmVkXCIpLFxuICBzaGFyZUNsYXNzSWQ6IHouc3RyaW5nKCkubWluKDEsIFwiU2hhcmUgY2xhc3MgaXMgcmVxdWlyZWRcIiksXG4gIHF1YW50aXR5OiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZShcIlF1YW50aXR5IG11c3QgYmUgcG9zaXRpdmVcIiksXG4gIHByaWNlUGVyU2hhcmU6IHouY29lcmNlLm51bWJlcigpLnBvc2l0aXZlKFwiUHJpY2UgbXVzdCBiZSBwb3NpdGl2ZVwiKSxcbiAgY2FzaFBhaWQ6IHouY29lcmNlLm51bWJlcigpLm1pbigwLCBcIkNhc2ggcGFpZCBjYW5ub3QgYmUgbmVnYXRpdmVcIiksXG4gIGNvc3RCYXNpczogei5jb2VyY2UubnVtYmVyKCkubWluKDApLm9wdGlvbmFsKCksXG4gIGFjcXVpc2l0aW9uRGF0ZTogei5zdHJpbmcoKS5taW4oMSwgXCJBY3F1aXNpdGlvbiBkYXRlIGlzIHJlcXVpcmVkXCIpLFxuICBpc3N1ZURhdGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgb3JpZ2luYWxJc3N1ZURhdGU6IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgc3RhdHVzOiB6LmVudW0oW1wiT1VUU1RBTkRJTkdcIiwgXCJDQU5DRUxMRURcIiwgXCJUUkFOU0ZFUlJFRFwiLCBcIlJFUFVSQ0hBU0VEXCJdKS5kZWZhdWx0KFwiT1VUU1RBTkRJTkdcIiksXG59KTtcblxuZXhwb3J0IHR5cGUgQ2VydGlmaWNhdGVGb3JtU3RhdGUgPSB7XG4gIGVycm9ycz86IHtcbiAgICBzdGFrZWhvbGRlcklkPzogc3RyaW5nW107XG4gICAgc2hhcmVDbGFzc0lkPzogc3RyaW5nW107XG4gICAgcXVhbnRpdHk/OiBzdHJpbmdbXTtcbiAgICBwcmljZVBlclNoYXJlPzogc3RyaW5nW107XG4gICAgY2FzaFBhaWQ/OiBzdHJpbmdbXTtcbiAgICBjb3N0QmFzaXM/OiBzdHJpbmdbXTtcbiAgICBhY3F1aXNpdGlvbkRhdGU/OiBzdHJpbmdbXTtcbiAgICBpc3N1ZURhdGU/OiBzdHJpbmdbXTtcbiAgICBzdGF0dXM/OiBzdHJpbmdbXTtcbiAgICBfZm9ybT86IHN0cmluZ1tdO1xuICB9O1xuICBtZXNzYWdlPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNlcnRpZmljYXRlKFxuICBwcmV2U3RhdGU6IENlcnRpZmljYXRlRm9ybVN0YXRlLFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8Q2VydGlmaWNhdGVGb3JtU3RhdGU+IHtcbiAgY29uc3QgY29tcGFueSA9IGF3YWl0IHByaXNtYS5jb21wYW55LmZpbmRGaXJzdCgpO1xuICBpZiAoIWNvbXBhbnkpIHtcbiAgICByZXR1cm4geyBlcnJvcnM6IHsgX2Zvcm06IFtcIk5vIGNvbXBhbnkgZm91bmRcIl0gfSB9O1xuICB9XG5cbiAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gY2VydGlmaWNhdGVTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICBzdGFrZWhvbGRlcklkOiBmb3JtRGF0YS5nZXQoXCJzdGFrZWhvbGRlcklkXCIpLFxuICAgIHNoYXJlQ2xhc3NJZDogZm9ybURhdGEuZ2V0KFwic2hhcmVDbGFzc0lkXCIpLFxuICAgIHF1YW50aXR5OiBmb3JtRGF0YS5nZXQoXCJxdWFudGl0eVwiKSxcbiAgICBwcmljZVBlclNoYXJlOiBmb3JtRGF0YS5nZXQoXCJwcmljZVBlclNoYXJlXCIpLFxuICAgIGNhc2hQYWlkOiBmb3JtRGF0YS5nZXQoXCJjYXNoUGFpZFwiKSxcbiAgICBjb3N0QmFzaXM6IGZvcm1EYXRhLmdldChcImNvc3RCYXNpc1wiKSB8fCBmb3JtRGF0YS5nZXQoXCJjYXNoUGFpZFwiKSxcbiAgICBhY3F1aXNpdGlvbkRhdGU6IGZvcm1EYXRhLmdldChcImFjcXVpc2l0aW9uRGF0ZVwiKSxcbiAgICBpc3N1ZURhdGU6IGZvcm1EYXRhLmdldChcImlzc3VlRGF0ZVwiKSxcbiAgICBvcmlnaW5hbElzc3VlRGF0ZTogZm9ybURhdGEuZ2V0KFwib3JpZ2luYWxJc3N1ZURhdGVcIiksXG4gICAgc3RhdHVzOiBmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgfHwgXCJPVVRTVEFORElOR1wiLFxuICB9KTtcblxuICBpZiAoIXZhbGlkYXRlZEZpZWxkcy5zdWNjZXNzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVycm9yczogdmFsaWRhdGVkRmllbGRzLmVycm9yLmZsYXR0ZW4oKS5maWVsZEVycm9ycyxcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgZGF0YSA9IHZhbGlkYXRlZEZpZWxkcy5kYXRhO1xuXG4gIHRyeSB7XG4gICAgLy8gR2VuZXJhdGUgc2VjdXJpdHkgSURcbiAgICBjb25zdCBzZWN1cml0eUlkID0gYXdhaXQgZ2VuZXJhdGVTZWN1cml0eUlkKFwiQ1NcIiwgY29tcGFueS5pZCk7XG5cbiAgICAvLyBDcmVhdGUgY2VydGlmaWNhdGVcbiAgICBjb25zdCBjZXJ0aWZpY2F0ZSA9IGF3YWl0IHByaXNtYS5zaGFyZUNlcnRpZmljYXRlLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvbXBhbnlJZDogY29tcGFueS5pZCxcbiAgICAgICAgc2VjdXJpdHlJZCxcbiAgICAgICAgc3Rha2Vob2xkZXJJZDogZGF0YS5zdGFrZWhvbGRlcklkLFxuICAgICAgICBzaGFyZUNsYXNzSWQ6IGRhdGEuc2hhcmVDbGFzc0lkLFxuICAgICAgICBxdWFudGl0eTogZGF0YS5xdWFudGl0eSxcbiAgICAgICAgcHJpY2VQZXJTaGFyZTogZGF0YS5wcmljZVBlclNoYXJlLFxuICAgICAgICBjYXNoUGFpZDogZGF0YS5jYXNoUGFpZCxcbiAgICAgICAgY29zdEJhc2lzOiBkYXRhLmNvc3RCYXNpcyA/PyBkYXRhLmNhc2hQYWlkLFxuICAgICAgICBhY3F1aXNpdGlvbkRhdGU6IG5ldyBEYXRlKGRhdGEuYWNxdWlzaXRpb25EYXRlKSxcbiAgICAgICAgaXNzdWVEYXRlOiBkYXRhLmlzc3VlRGF0ZSA/IG5ldyBEYXRlKGRhdGEuaXNzdWVEYXRlKSA6IG5ldyBEYXRlKCksXG4gICAgICAgIG9yaWdpbmFsSXNzdWVEYXRlOiBkYXRhLm9yaWdpbmFsSXNzdWVEYXRlXG4gICAgICAgICAgPyBuZXcgRGF0ZShkYXRhLm9yaWdpbmFsSXNzdWVEYXRlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgYXVkaXQgbG9nXG4gICAgYXdhaXQgcHJpc21hLmF1ZGl0TG9nLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvbXBhbnlJZDogY29tcGFueS5pZCxcbiAgICAgICAgYWN0aW9uOiBcIkNSRUFURVwiLFxuICAgICAgICBlbnRpdHlUeXBlOiBcIlNoYXJlQ2VydGlmaWNhdGVcIixcbiAgICAgICAgZW50aXR5SWQ6IGNlcnRpZmljYXRlLmlkLFxuICAgICAgICBhZnRlcjogY2VydGlmaWNhdGUgYXMgYW55LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2NlcnRpZmljYXRlc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9jYXAtdGFibGVcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjcmVhdGluZyBjZXJ0aWZpY2F0ZTpcIiwgZXJyb3IpO1xuICAgIHJldHVybiB7IGVycm9yczogeyBfZm9ybTogW1wiRmFpbGVkIHRvIGNyZWF0ZSBjZXJ0aWZpY2F0ZVwiXSB9IH07XG4gIH1cblxuICByZWRpcmVjdChcIi9jZXJ0aWZpY2F0ZXNcIik7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDZXJ0aWZpY2F0ZShcbiAgaWQ6IHN0cmluZyxcbiAgcHJldlN0YXRlOiBDZXJ0aWZpY2F0ZUZvcm1TdGF0ZSxcbiAgZm9ybURhdGE6IEZvcm1EYXRhXG4pOiBQcm9taXNlPENlcnRpZmljYXRlRm9ybVN0YXRlPiB7XG4gIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLnNoYXJlQ2VydGlmaWNhdGUuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQgfSxcbiAgfSk7XG5cbiAgaWYgKCFleGlzdGluZykge1xuICAgIHJldHVybiB7IGVycm9yczogeyBfZm9ybTogW1wiQ2VydGlmaWNhdGUgbm90IGZvdW5kXCJdIH0gfTtcbiAgfVxuXG4gIGNvbnN0IHZhbGlkYXRlZEZpZWxkcyA9IGNlcnRpZmljYXRlU2NoZW1hLnNhZmVQYXJzZSh7XG4gICAgc3Rha2Vob2xkZXJJZDogZm9ybURhdGEuZ2V0KFwic3Rha2Vob2xkZXJJZFwiKSxcbiAgICBzaGFyZUNsYXNzSWQ6IGZvcm1EYXRhLmdldChcInNoYXJlQ2xhc3NJZFwiKSxcbiAgICBxdWFudGl0eTogZm9ybURhdGEuZ2V0KFwicXVhbnRpdHlcIiksXG4gICAgcHJpY2VQZXJTaGFyZTogZm9ybURhdGEuZ2V0KFwicHJpY2VQZXJTaGFyZVwiKSxcbiAgICBjYXNoUGFpZDogZm9ybURhdGEuZ2V0KFwiY2FzaFBhaWRcIiksXG4gICAgY29zdEJhc2lzOiBmb3JtRGF0YS5nZXQoXCJjb3N0QmFzaXNcIikgfHwgZm9ybURhdGEuZ2V0KFwiY2FzaFBhaWRcIiksXG4gICAgYWNxdWlzaXRpb25EYXRlOiBmb3JtRGF0YS5nZXQoXCJhY3F1aXNpdGlvbkRhdGVcIiksXG4gICAgaXNzdWVEYXRlOiBmb3JtRGF0YS5nZXQoXCJpc3N1ZURhdGVcIiksXG4gICAgb3JpZ2luYWxJc3N1ZURhdGU6IGZvcm1EYXRhLmdldChcIm9yaWdpbmFsSXNzdWVEYXRlXCIpLFxuICAgIHN0YXR1czogZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIHx8IFwiT1VUU1RBTkRJTkdcIixcbiAgfSk7XG5cbiAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcblxuICB0cnkge1xuICAgIGNvbnN0IGNlcnRpZmljYXRlID0gYXdhaXQgcHJpc21hLnNoYXJlQ2VydGlmaWNhdGUudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHN0YWtlaG9sZGVySWQ6IGRhdGEuc3Rha2Vob2xkZXJJZCxcbiAgICAgICAgc2hhcmVDbGFzc0lkOiBkYXRhLnNoYXJlQ2xhc3NJZCxcbiAgICAgICAgcXVhbnRpdHk6IGRhdGEucXVhbnRpdHksXG4gICAgICAgIHByaWNlUGVyU2hhcmU6IGRhdGEucHJpY2VQZXJTaGFyZSxcbiAgICAgICAgY2FzaFBhaWQ6IGRhdGEuY2FzaFBhaWQsXG4gICAgICAgIGNvc3RCYXNpczogZGF0YS5jb3N0QmFzaXMgPz8gZGF0YS5jYXNoUGFpZCxcbiAgICAgICAgYWNxdWlzaXRpb25EYXRlOiBuZXcgRGF0ZShkYXRhLmFjcXVpc2l0aW9uRGF0ZSksXG4gICAgICAgIGlzc3VlRGF0ZTogZGF0YS5pc3N1ZURhdGUgPyBuZXcgRGF0ZShkYXRhLmlzc3VlRGF0ZSkgOiB1bmRlZmluZWQsXG4gICAgICAgIG9yaWdpbmFsSXNzdWVEYXRlOiBkYXRhLm9yaWdpbmFsSXNzdWVEYXRlXG4gICAgICAgICAgPyBuZXcgRGF0ZShkYXRhLm9yaWdpbmFsSXNzdWVEYXRlKVxuICAgICAgICAgIDogbnVsbCxcbiAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICAvLyBDcmVhdGUgYXVkaXQgbG9nXG4gICAgYXdhaXQgcHJpc21hLmF1ZGl0TG9nLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIGNvbXBhbnlJZDogZXhpc3RpbmcuY29tcGFueUlkLFxuICAgICAgICBhY3Rpb246IFwiVVBEQVRFXCIsXG4gICAgICAgIGVudGl0eVR5cGU6IFwiU2hhcmVDZXJ0aWZpY2F0ZVwiLFxuICAgICAgICBlbnRpdHlJZDogY2VydGlmaWNhdGUuaWQsXG4gICAgICAgIGJlZm9yZTogZXhpc3RpbmcgYXMgYW55LFxuICAgICAgICBhZnRlcjogY2VydGlmaWNhdGUgYXMgYW55LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2NlcnRpZmljYXRlc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL2NlcnRpZmljYXRlcy8ke2lkfWApO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2NhcC10YWJsZVwiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHVwZGF0aW5nIGNlcnRpZmljYXRlOlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgZXJyb3JzOiB7IF9mb3JtOiBbXCJGYWlsZWQgdG8gdXBkYXRlIGNlcnRpZmljYXRlXCJdIH0gfTtcbiAgfVxuXG4gIHJlZGlyZWN0KGAvY2VydGlmaWNhdGVzLyR7aWR9YCk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDZXJ0aWZpY2F0ZShpZDogc3RyaW5nKSB7XG4gIGNvbnN0IGV4aXN0aW5nID0gYXdhaXQgcHJpc21hLnNoYXJlQ2VydGlmaWNhdGUuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQgfSxcbiAgfSk7XG5cbiAgaWYgKCFleGlzdGluZykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNlcnRpZmljYXRlIG5vdCBmb3VuZFwiKTtcbiAgfVxuXG4gIC8vIFNvZnQgZGVsZXRlIGJ5IGNoYW5naW5nIHN0YXR1cyB0byBDQU5DRUxMRURcbiAgYXdhaXQgcHJpc21hLnNoYXJlQ2VydGlmaWNhdGUudXBkYXRlKHtcbiAgICB3aGVyZTogeyBpZCB9LFxuICAgIGRhdGE6IHsgc3RhdHVzOiBcIkNBTkNFTExFRFwiIH0sXG4gIH0pO1xuXG4gIC8vIENyZWF0ZSBhdWRpdCBsb2dcbiAgYXdhaXQgcHJpc21hLmF1ZGl0TG9nLmNyZWF0ZSh7XG4gICAgZGF0YToge1xuICAgICAgY29tcGFueUlkOiBleGlzdGluZy5jb21wYW55SWQsXG4gICAgICBhY3Rpb246IFwiREVMRVRFXCIsXG4gICAgICBlbnRpdHlUeXBlOiBcIlNoYXJlQ2VydGlmaWNhdGVcIixcbiAgICAgIGVudGl0eUlkOiBpZCxcbiAgICAgIGJlZm9yZTogZXhpc3RpbmcgYXMgYW55LFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldmFsaWRhdGVQYXRoKFwiL2NlcnRpZmljYXRlc1wiKTtcbiAgcmV2YWxpZGF0ZVBhdGgoXCIvY2FwLXRhYmxlXCIpO1xuICByZXZhbGlkYXRlUGF0aChcIi9cIik7XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjZTQWlIc0IsOExBQUEifQ==
}),
"[project]/src/app/(admin)/certificates/certificate-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CertificateForm",
    ()=>CertificateForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$admin$292f$certificates$2f$data$3a$102b8b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/(admin)/certificates/data:102b8b [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$admin$292f$certificates$2f$data$3a$133dbd__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/(admin)/certificates/data:133dbd [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-client] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
function CertificateForm({ stakeholders, shareClasses, certificate }) {
    _s();
    const isEditing = !!certificate;
    const initialState = {
        errors: {}
    };
    const boundAction = isEditing ? __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$admin$292f$certificates$2f$data$3a$133dbd__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateCertificate"].bind(null, certificate.id) : __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$admin$292f$certificates$2f$data$3a$102b8b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCertificate"];
    const [state, formAction, isPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"])(boundAction, initialState);
    const formatDateForInput = (date)=>{
        if (!date) return "";
        const d = new Date(date);
        return d.toISOString().split("T")[0];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: formAction,
        className: "space-y-6",
        children: [
            state.errors?._form && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded",
                children: state.errors._form.join(", ")
            }, void 0, false, {
                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                lineNumber: 43,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                "Shareholder"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "stakeholderId",
                                        children: "Stakeholder *"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        id: "stakeholderId",
                                        name: "stakeholderId",
                                        defaultValue: certificate?.stakeholderId || "",
                                        required: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select a stakeholder..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                                lineNumber: 65,
                                                columnNumber: 15
                                            }, this),
                                            stakeholders.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: s.id,
                                                    children: [
                                                        s.name,
                                                        " (",
                                                        s.email,
                                                        ")"
                                                    ]
                                                }, s.id, true, {
                                                    fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                                    lineNumber: 67,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                        lineNumber: 59,
                                        columnNumber: 13
                                    }, this),
                                    state.errors?.stakeholderId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-500 mt-1",
                                        children: state.errors.stakeholderId.join(", ")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                        lineNumber: 73,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "status",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        id: "status",
                                        name: "status",
                                        defaultValue: certificate?.status || "OUTSTANDING",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "OUTSTANDING",
                                                children: "Outstanding"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "CANCELLED",
                                                children: "Cancelled"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "TRANSFERRED",
                                                children: "Transferred"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "REPURCHASED",
                                                children: "Repurchased"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                        lineNumber: 81,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                        lineNumber: 56,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                lineNumber: 49,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                    lineNumber: 99,
                                    columnNumber: 13
                                }, this),
                                "Certificate Details"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "shareClassId",
                                        children: "Share Class *"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                                        id: "shareClassId",
                                        name: "shareClassId",
                                        defaultValue: certificate?.shareClassId || "",
                                        required: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select a share class..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this),
                                            shareClasses.map((sc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: sc.id,
                                                    children: [
                                                        sc.name,
                                                        " (",
                                                        sc.type,
                                                        ")"
                                                    ]
                                                }, sc.id, true, {
                                                    fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                                    lineNumber: 114,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    state.errors?.shareClassId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-500 mt-1",
                                        children: state.errors.shareClassId.join(", ")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "quantity",
                                                children: "Quantity *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                                lineNumber: 128,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "quantity",
                                                name: "quantity",
                                                type: "number",
                                                min: "1",
                                                step: "1",
                                                defaultValue: certificate?.quantity || "",
                                                placeholder: "1,000,000",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                                lineNumber: 129,
                                                columnNumber: 15
                                            }, this),
                                            state.errors?.quantity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-red-500 mt-1",
                                                children: state.errors.quantity.join(", ")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                                lineNumber: 140,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                        lineNumber: 127,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "pricePerShare",
                                                children: "Price per Share *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                                lineNumber: 147,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "pricePerShare",
                                                name: "pricePerShare",
                                                type: "number",
                                                min: "0",
                                                step: "0.0001",
                                                defaultValue: certificate?.pricePerShare?.toString() || "",
                                                placeholder: "0.0001",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                                lineNumber: 148,
                                                columnNumber: 15
                                            }, this),
                                            state.errors?.pricePerShare && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-red-500 mt-1",
                                                children: state.errors.pricePerShare.join(", ")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                                lineNumber: 159,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                        lineNumber: 146,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "cashPaid",
                                                children: "Cash Paid *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                                lineNumber: 166,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "cashPaid",
                                                name: "cashPaid",
                                                type: "number",
                                                min: "0",
                                                step: "0.01",
                                                defaultValue: certificate?.cashPaid?.toString() || "",
                                                placeholder: "100.00",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                                lineNumber: 167,
                                                columnNumber: 15
                                            }, this),
                                            state.errors?.cashPaid && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-red-500 mt-1",
                                                children: state.errors.cashPaid.join(", ")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                                lineNumber: 178,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "costBasis",
                                                children: "Cost Basis"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                                lineNumber: 185,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "costBasis",
                                                name: "costBasis",
                                                type: "number",
                                                min: "0",
                                                step: "0.01",
                                                defaultValue: certificate?.costBasis?.toString() || "",
                                                placeholder: "Defaults to cash paid"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                                lineNumber: 186,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground mt-1",
                                                children: "Leave blank to use cash paid"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                                lineNumber: 195,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "acquisitionDate",
                                                children: "Acquisition Date *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                                lineNumber: 201,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "acquisitionDate",
                                                name: "acquisitionDate",
                                                type: "date",
                                                defaultValue: formatDateForInput(certificate?.acquisitionDate),
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                                lineNumber: 202,
                                                columnNumber: 15
                                            }, this),
                                            state.errors?.acquisitionDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-red-500 mt-1",
                                                children: state.errors.acquisitionDate.join(", ")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                                lineNumber: 210,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                        lineNumber: 200,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                    lineNumber: 223,
                                    columnNumber: 13
                                }, this),
                                "Issuer Information"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                            lineNumber: 222,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                        lineNumber: 221,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "issueDate",
                                            children: "Issue Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "issueDate",
                                            name: "issueDate",
                                            type: "date",
                                            defaultValue: formatDateForInput(certificate?.issueDate)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                            lineNumber: 231,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground mt-1",
                                            children: "Defaults to today"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                            lineNumber: 237,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                    lineNumber: 229,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "originalIssueDate",
                                            children: "Original Issue Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                            lineNumber: 243,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "originalIssueDate",
                                            name: "originalIssueDate",
                                            type: "date",
                                            defaultValue: formatDateForInput(certificate?.originalIssueDate)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                            lineNumber: 244,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-muted-foreground mt-1",
                                            children: "If different from issue date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                            lineNumber: 250,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                                    lineNumber: 242,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "outline",
                        onClick: ()=>history.back(),
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                        lineNumber: 260,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: isPending,
                        children: isPending ? isEditing ? "Saving..." : "Creating..." : isEditing ? "Save Changes" : "Issue Certificate"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(admin)/certificates/certificate-form.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
_s(CertificateForm, "Q+UVYBFFKRU9D4mLS4qAWh1kSvI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useActionState"]
    ];
});
_c = CertificateForm;
var _c;
__turbopack_context__.k.register(_c, "CertificateForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cva",
    ()=>cva,
    "cx",
    ()=>cx
]);
/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ChevronDown
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
];
const ChevronDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("chevron-down", __iconNode);
;
 //# sourceMappingURL=chevron-down.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChevronDown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript)");
}),
"[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This file must be bundled in the app's client layer, it shouldn't be directly
// imported by the server.
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    callServer: null,
    createServerReference: null,
    findSourceMapURL: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    callServer: function() {
        return _appcallserver.callServer;
    },
    createServerReference: function() {
        return _client.createServerReference;
    },
    findSourceMapURL: function() {
        return _appfindsourcemapurl.findSourceMapURL;
    }
});
const _appcallserver = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _appfindsourcemapurl = __turbopack_context__.r("[project]/node_modules/next/dist/client/app-find-source-map-url.js [app-client] (ecmascript)");
const _client = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-server-dom-turbopack/client.js [app-client] (ecmascript)"); //# sourceMappingURL=action-client-wrapper.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>User
]);
/**
 * @license lucide-react v0.564.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
            key: "975kel"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "7",
            r: "4",
            key: "17ys0d"
        }
    ]
];
const User = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("user", __iconNode);
;
 //# sourceMappingURL=user.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "User",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_b5845187._.js.map