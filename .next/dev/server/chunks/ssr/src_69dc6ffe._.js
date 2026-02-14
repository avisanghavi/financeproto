module.exports = [
"[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
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
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, variant, size, asChild = false, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
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
Button.displayName = "Button";
;
}),
"[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, type, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/input.tsx",
        lineNumber: 10,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Input.displayName = "Input";
;
}),
"[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const labelVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(labelVariants(), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/label.tsx",
        lineNumber: 16,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Label.displayName = "Label";
;
}),
"[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
"use client";
;
;
;
;
const Select = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, children, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex h-10 w-full appearance-none rounded-md border border-input bg-background px-3 py-2 pr-8 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
                ref: ref,
                ...props,
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/select.tsx",
                lineNumber: 16,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
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
Select.displayName = "Select";
;
}),
"[project]/src/components/ui/textarea.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Textarea",
    ()=>Textarea
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Textarea = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className),
        ref: ref,
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/textarea.tsx",
        lineNumber: 10,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
});
Textarea.displayName = "Textarea";
;
}),
"[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 8,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 23,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 35,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 50,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 62,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["forwardRef"](({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 70,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0)));
CardFooter.displayName = "CardFooter";
;
}),
"[project]/src/app/(admin)/options/data:0eb4a6 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createOptionGrant",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"6026d7766baa0c8857adba5f119f8579789eae5dee":"createOptionGrant"},"src/app/(admin)/options/actions.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("6026d7766baa0c8857adba5f119f8579789eae5dee", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createOptionGrant");
;
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIkAvbGliL3ByaXNtYVwiO1xuaW1wb3J0IHsgZ2VuZXJhdGVTZWN1cml0eUlkIH0gZnJvbSBcIkAvbGliL3NlY3VyaXR5LWlkXCI7XG5pbXBvcnQgeyBjcmVhdGVWZXN0aW5nUGVyaW9kUmVjb3JkcyB9IGZyb20gXCJAL2xpYi92ZXN0aW5nXCI7XG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbmNvbnN0IG9wdGlvbkdyYW50U2NoZW1hID0gei5vYmplY3Qoe1xuICBzdGFrZWhvbGRlcklkOiB6LnN0cmluZygpLm1pbigxLCBcIlN0YWtlaG9sZGVyIGlzIHJlcXVpcmVkXCIpLFxuICBlcXVpdHlQbGFuSWQ6IHouc3RyaW5nKCkubWluKDEsIFwiRXF1aXR5IHBsYW4gaXMgcmVxdWlyZWRcIiksXG4gIG9yaWdpbmFsUXVhbnRpdHk6IHouY29lcmNlLm51bWJlcigpLmludCgpLnBvc2l0aXZlKFwiUXVhbnRpdHkgbXVzdCBiZSBwb3NpdGl2ZVwiKSxcbiAgZXhlcmNpc2VQcmljZTogei5jb2VyY2UubnVtYmVyKCkucG9zaXRpdmUoXCJFeGVyY2lzZSBwcmljZSBtdXN0IGJlIHBvc2l0aXZlXCIpLFxuICB0eXBlOiB6LmVudW0oW1wiSVNPXCIsIFwiTlNPXCJdKSxcbiAgZ3JhbnREYXRlOiB6LnN0cmluZygpLm1pbigxLCBcIkdyYW50IGRhdGUgaXMgcmVxdWlyZWRcIiksXG4gIGJvYXJkQXBwcm92YWxEYXRlOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG4gIGV4cGlyYXRpb25EYXRlOiB6LnN0cmluZygpLm1pbigxLCBcIkV4cGlyYXRpb24gZGF0ZSBpcyByZXF1aXJlZFwiKSxcbiAgZ3JhbnRSZWFzb246IHouc3RyaW5nKCkub3B0aW9uYWwoKSxcbiAgc3RhdHVzOiB6LmVudW0oW1wiQUNUSVZFXCIsIFwiUEFSVElBTExZX0VYRVJDSVNFRFwiLCBcIkZVTExZX0VYRVJDSVNFRFwiLCBcIkVYUElSRURcIiwgXCJDQU5DRUxMRURcIiwgXCJURVJNSU5BVEVEXCJdKS5kZWZhdWx0KFwiQUNUSVZFXCIpLFxuICAvLyBWZXN0aW5nIHNjaGVkdWxlXG4gIHZlc3RpbmdTdGFydERhdGU6IHouc3RyaW5nKCkubWluKDEsIFwiVmVzdGluZyBzdGFydCBkYXRlIGlzIHJlcXVpcmVkXCIpLFxuICBjbGlmZk1vbnRoczogei5jb2VyY2UubnVtYmVyKCkuaW50KCkubWluKDApLmRlZmF1bHQoMTIpLFxuICBjbGlmZlBlcmNlbnRhZ2U6IHouY29lcmNlLm51bWJlcigpLm1pbigwKS5tYXgoMSkuZGVmYXVsdCgwLjI1KSxcbiAgdG90YWxQZXJpb2RzOiB6LmNvZXJjZS5udW1iZXIoKS5pbnQoKS5wb3NpdGl2ZSgpLmRlZmF1bHQoNDgpLFxuICBwZXJpb2RVbml0OiB6LmVudW0oW1wiTU9OVEhMWVwiLCBcIlFVQVJURVJMWVwiLCBcIkFOTlVBTExZXCJdKS5kZWZhdWx0KFwiTU9OVEhMWVwiKSxcbiAgc2NoZWR1bGVOYW1lOiB6LnN0cmluZygpLm9wdGlvbmFsKCksXG59KTtcblxuZXhwb3J0IHR5cGUgT3B0aW9uR3JhbnRGb3JtU3RhdGUgPSB7XG4gIGVycm9ycz86IHtcbiAgICBzdGFrZWhvbGRlcklkPzogc3RyaW5nW107XG4gICAgZXF1aXR5UGxhbklkPzogc3RyaW5nW107XG4gICAgb3JpZ2luYWxRdWFudGl0eT86IHN0cmluZ1tdO1xuICAgIGV4ZXJjaXNlUHJpY2U/OiBzdHJpbmdbXTtcbiAgICB0eXBlPzogc3RyaW5nW107XG4gICAgZ3JhbnREYXRlPzogc3RyaW5nW107XG4gICAgZXhwaXJhdGlvbkRhdGU/OiBzdHJpbmdbXTtcbiAgICB2ZXN0aW5nU3RhcnREYXRlPzogc3RyaW5nW107XG4gICAgY2xpZmZNb250aHM/OiBzdHJpbmdbXTtcbiAgICB0b3RhbFBlcmlvZHM/OiBzdHJpbmdbXTtcbiAgICBfZm9ybT86IHN0cmluZ1tdO1xuICB9O1xuICBtZXNzYWdlPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU9wdGlvbkdyYW50KFxuICBwcmV2U3RhdGU6IE9wdGlvbkdyYW50Rm9ybVN0YXRlLFxuICBmb3JtRGF0YTogRm9ybURhdGFcbik6IFByb21pc2U8T3B0aW9uR3JhbnRGb3JtU3RhdGU+IHtcbiAgY29uc3QgY29tcGFueSA9IGF3YWl0IHByaXNtYS5jb21wYW55LmZpbmRGaXJzdCgpO1xuICBpZiAoIWNvbXBhbnkpIHtcbiAgICByZXR1cm4geyBlcnJvcnM6IHsgX2Zvcm06IFtcIk5vIGNvbXBhbnkgZm91bmRcIl0gfSB9O1xuICB9XG5cbiAgY29uc3QgdmFsaWRhdGVkRmllbGRzID0gb3B0aW9uR3JhbnRTY2hlbWEuc2FmZVBhcnNlKHtcbiAgICBzdGFrZWhvbGRlcklkOiBmb3JtRGF0YS5nZXQoXCJzdGFrZWhvbGRlcklkXCIpLFxuICAgIGVxdWl0eVBsYW5JZDogZm9ybURhdGEuZ2V0KFwiZXF1aXR5UGxhbklkXCIpLFxuICAgIG9yaWdpbmFsUXVhbnRpdHk6IGZvcm1EYXRhLmdldChcIm9yaWdpbmFsUXVhbnRpdHlcIiksXG4gICAgZXhlcmNpc2VQcmljZTogZm9ybURhdGEuZ2V0KFwiZXhlcmNpc2VQcmljZVwiKSxcbiAgICB0eXBlOiBmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpLFxuICAgIGdyYW50RGF0ZTogZm9ybURhdGEuZ2V0KFwiZ3JhbnREYXRlXCIpLFxuICAgIGJvYXJkQXBwcm92YWxEYXRlOiBmb3JtRGF0YS5nZXQoXCJib2FyZEFwcHJvdmFsRGF0ZVwiKSxcbiAgICBleHBpcmF0aW9uRGF0ZTogZm9ybURhdGEuZ2V0KFwiZXhwaXJhdGlvbkRhdGVcIiksXG4gICAgZ3JhbnRSZWFzb246IGZvcm1EYXRhLmdldChcImdyYW50UmVhc29uXCIpLFxuICAgIHN0YXR1czogZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIHx8IFwiQUNUSVZFXCIsXG4gICAgdmVzdGluZ1N0YXJ0RGF0ZTogZm9ybURhdGEuZ2V0KFwidmVzdGluZ1N0YXJ0RGF0ZVwiKSxcbiAgICBjbGlmZk1vbnRoczogZm9ybURhdGEuZ2V0KFwiY2xpZmZNb250aHNcIiksXG4gICAgY2xpZmZQZXJjZW50YWdlOiBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcImNsaWZmUGVyY2VudGFnZVwiKSBhcyBzdHJpbmcpIHx8IDAuMjUsXG4gICAgdG90YWxQZXJpb2RzOiBmb3JtRGF0YS5nZXQoXCJ0b3RhbFBlcmlvZHNcIiksXG4gICAgcGVyaW9kVW5pdDogZm9ybURhdGEuZ2V0KFwicGVyaW9kVW5pdFwiKSxcbiAgICBzY2hlZHVsZU5hbWU6IGZvcm1EYXRhLmdldChcInNjaGVkdWxlTmFtZVwiKSxcbiAgfSk7XG5cbiAgaWYgKCF2YWxpZGF0ZWRGaWVsZHMuc3VjY2Vzcykge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcnM6IHZhbGlkYXRlZEZpZWxkcy5lcnJvci5mbGF0dGVuKCkuZmllbGRFcnJvcnMsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGRhdGEgPSB2YWxpZGF0ZWRGaWVsZHMuZGF0YTtcblxuICAvLyBDaGVjayBlcXVpdHkgcGxhbiBoYXMgZW5vdWdoIHNoYXJlc1xuICBjb25zdCBlcXVpdHlQbGFuID0gYXdhaXQgcHJpc21hLmVxdWl0eVBsYW4uZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IGRhdGEuZXF1aXR5UGxhbklkIH0sXG4gIH0pO1xuXG4gIGlmICghZXF1aXR5UGxhbikge1xuICAgIHJldHVybiB7IGVycm9yczogeyBfZm9ybTogW1wiRXF1aXR5IHBsYW4gbm90IGZvdW5kXCJdIH0gfTtcbiAgfVxuXG4gIGlmIChlcXVpdHlQbGFuLmF2YWlsYWJsZVNoYXJlcyA8IGRhdGEub3JpZ2luYWxRdWFudGl0eSkge1xuICAgIHJldHVybiB7XG4gICAgICBlcnJvcnM6IHtcbiAgICAgICAgb3JpZ2luYWxRdWFudGl0eTogW1xuICAgICAgICAgIGBOb3QgZW5vdWdoIHNoYXJlcyBpbiBwb29sLiBBdmFpbGFibGU6ICR7ZXF1aXR5UGxhbi5hdmFpbGFibGVTaGFyZXMudG9Mb2NhbGVTdHJpbmcoKX1gLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgdHJ5IHtcbiAgICAvLyBHZW5lcmF0ZSBzZWN1cml0eSBJRFxuICAgIGNvbnN0IHNlY3VyaXR5SWQgPSBhd2FpdCBnZW5lcmF0ZVNlY3VyaXR5SWQoXCJFU1wiLCBjb21wYW55LmlkKTtcblxuICAgIC8vIENyZWF0ZSBncmFudCB3aXRoIHZlc3Rpbmcgc2NoZWR1bGUgaW4gYSB0cmFuc2FjdGlvblxuICAgIGNvbnN0IGdyYW50ID0gYXdhaXQgcHJpc21hLiR0cmFuc2FjdGlvbihhc3luYyAodHgpID0+IHtcbiAgICAgIC8vIENyZWF0ZSB0aGUgZ3JhbnRcbiAgICAgIGNvbnN0IG5ld0dyYW50ID0gYXdhaXQgdHgub3B0aW9uR3JhbnQuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNvbXBhbnlJZDogY29tcGFueS5pZCxcbiAgICAgICAgICBzZWN1cml0eUlkLFxuICAgICAgICAgIHN0YWtlaG9sZGVySWQ6IGRhdGEuc3Rha2Vob2xkZXJJZCxcbiAgICAgICAgICBlcXVpdHlQbGFuSWQ6IGRhdGEuZXF1aXR5UGxhbklkLFxuICAgICAgICAgIG9yaWdpbmFsUXVhbnRpdHk6IGRhdGEub3JpZ2luYWxRdWFudGl0eSxcbiAgICAgICAgICBleGVyY2lzZVByaWNlOiBkYXRhLmV4ZXJjaXNlUHJpY2UsXG4gICAgICAgICAgdHlwZTogZGF0YS50eXBlLFxuICAgICAgICAgIGdyYW50RGF0ZTogbmV3IERhdGUoZGF0YS5ncmFudERhdGUpLFxuICAgICAgICAgIGJvYXJkQXBwcm92YWxEYXRlOiBkYXRhLmJvYXJkQXBwcm92YWxEYXRlXG4gICAgICAgICAgICA/IG5ldyBEYXRlKGRhdGEuYm9hcmRBcHByb3ZhbERhdGUpXG4gICAgICAgICAgICA6IG51bGwsXG4gICAgICAgICAgZXhwaXJhdGlvbkRhdGU6IG5ldyBEYXRlKGRhdGEuZXhwaXJhdGlvbkRhdGUpLFxuICAgICAgICAgIGdyYW50UmVhc29uOiBkYXRhLmdyYW50UmVhc29uIHx8IG51bGwsXG4gICAgICAgICAgc3RhdHVzOiBkYXRhLnN0YXR1cyxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICAvLyBDcmVhdGUgdmVzdGluZyBzY2hlZHVsZVxuICAgICAgY29uc3QgdmVzdGluZ1NjaGVkdWxlID0gYXdhaXQgdHgudmVzdGluZ1NjaGVkdWxlLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBvcHRpb25HcmFudElkOiBuZXdHcmFudC5pZCxcbiAgICAgICAgICBzY2hlZHVsZU5hbWU6IGRhdGEuc2NoZWR1bGVOYW1lIHx8IG51bGwsXG4gICAgICAgICAgdmVzdGluZ1N0YXJ0RGF0ZTogbmV3IERhdGUoZGF0YS52ZXN0aW5nU3RhcnREYXRlKSxcbiAgICAgICAgICBjbGlmZk1vbnRoczogZGF0YS5jbGlmZk1vbnRocyxcbiAgICAgICAgICBjbGlmZlBlcmNlbnRhZ2U6IGRhdGEuY2xpZmZQZXJjZW50YWdlLFxuICAgICAgICAgIHRvdGFsUGVyaW9kczogZGF0YS50b3RhbFBlcmlvZHMsXG4gICAgICAgICAgcGVyaW9kVW5pdDogZGF0YS5wZXJpb2RVbml0LFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIERlY3JlbWVudCBhdmFpbGFibGUgc2hhcmVzIGluIGVxdWl0eSBwbGFuXG4gICAgICBhd2FpdCB0eC5lcXVpdHlQbGFuLnVwZGF0ZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiBkYXRhLmVxdWl0eVBsYW5JZCB9LFxuICAgICAgICBkYXRhOiB7IGF2YWlsYWJsZVNoYXJlczogeyBkZWNyZW1lbnQ6IGRhdGEub3JpZ2luYWxRdWFudGl0eSB9IH0sXG4gICAgICB9KTtcblxuICAgICAgLy8gQ3JlYXRlIGRlZmF1bHQgcG9zdC10ZXJtaW5hdGlvbiBleGVyY2lzZSBwZXJpb2RzXG4gICAgICBhd2FpdCB0eC5wb3N0VGVybWluYXRpb25FeGVyY2lzZVBlcmlvZC5jcmVhdGVNYW55KHtcbiAgICAgICAgZGF0YTogW1xuICAgICAgICAgIHsgb3B0aW9uR3JhbnRJZDogbmV3R3JhbnQuaWQsIHRlcm1pbmF0aW9uVHlwZTogXCJWT0xVTlRBUllcIiwgZHVyYXRpb246IDkwLCBkdXJhdGlvblVuaXQ6IFwiREFZU1wiIH0sXG4gICAgICAgICAgeyBvcHRpb25HcmFudElkOiBuZXdHcmFudC5pZCwgdGVybWluYXRpb25UeXBlOiBcIklOVk9MVU5UQVJZXCIsIGR1cmF0aW9uOiA5MCwgZHVyYXRpb25Vbml0OiBcIkRBWVNcIiB9LFxuICAgICAgICAgIHsgb3B0aW9uR3JhbnRJZDogbmV3R3JhbnQuaWQsIHRlcm1pbmF0aW9uVHlwZTogXCJGT1JfQ0FVU0VcIiwgZHVyYXRpb246IDAsIGR1cmF0aW9uVW5pdDogXCJEQVlTXCIgfSxcbiAgICAgICAgICB7IG9wdGlvbkdyYW50SWQ6IG5ld0dyYW50LmlkLCB0ZXJtaW5hdGlvblR5cGU6IFwiREVBVEhcIiwgZHVyYXRpb246IDEyLCBkdXJhdGlvblVuaXQ6IFwiTU9OVEhTXCIgfSxcbiAgICAgICAgICB7IG9wdGlvbkdyYW50SWQ6IG5ld0dyYW50LmlkLCB0ZXJtaW5hdGlvblR5cGU6IFwiRElTQUJJTElUWVwiLCBkdXJhdGlvbjogMTIsIGR1cmF0aW9uVW5pdDogXCJNT05USFNcIiB9LFxuICAgICAgICAgIHsgb3B0aW9uR3JhbnRJZDogbmV3R3JhbnQuaWQsIHRlcm1pbmF0aW9uVHlwZTogXCJSRVRJUkVNRU5UXCIsIGR1cmF0aW9uOiAzLCBkdXJhdGlvblVuaXQ6IFwiTU9OVEhTXCIgfSxcbiAgICAgICAgXSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4geyBncmFudDogbmV3R3JhbnQsIHZlc3RpbmdTY2hlZHVsZSB9O1xuICAgIH0pO1xuXG4gICAgLy8gQ3JlYXRlIHZlc3RpbmcgcGVyaW9kcyBvdXRzaWRlIHRyYW5zYWN0aW9uICh1c2VzIFByaXNtYSBjbGllbnQpXG4gICAgYXdhaXQgY3JlYXRlVmVzdGluZ1BlcmlvZFJlY29yZHMoXG4gICAgICBncmFudC52ZXN0aW5nU2NoZWR1bGUuaWQsXG4gICAgICBkYXRhLm9yaWdpbmFsUXVhbnRpdHksXG4gICAgICB7XG4gICAgICAgIHZlc3RpbmdTdGFydERhdGU6IG5ldyBEYXRlKGRhdGEudmVzdGluZ1N0YXJ0RGF0ZSksXG4gICAgICAgIGNsaWZmTW9udGhzOiBkYXRhLmNsaWZmTW9udGhzLFxuICAgICAgICBjbGlmZlBlcmNlbnRhZ2U6IGRhdGEuY2xpZmZQZXJjZW50YWdlLFxuICAgICAgICB0b3RhbFBlcmlvZHM6IGRhdGEudG90YWxQZXJpb2RzLFxuICAgICAgICBwZXJpb2RVbml0OiBkYXRhLnBlcmlvZFVuaXQsXG4gICAgICB9XG4gICAgKTtcblxuICAgIC8vIENyZWF0ZSBhdWRpdCBsb2dcbiAgICBhd2FpdCBwcmlzbWEuYXVkaXRMb2cuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29tcGFueUlkOiBjb21wYW55LmlkLFxuICAgICAgICBhY3Rpb246IFwiQ1JFQVRFXCIsXG4gICAgICAgIGVudGl0eVR5cGU6IFwiT3B0aW9uR3JhbnRcIixcbiAgICAgICAgZW50aXR5SWQ6IGdyYW50LmdyYW50LmlkLFxuICAgICAgICBhZnRlcjogZ3JhbnQuZ3JhbnQgYXMgYW55LFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL29wdGlvbnNcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvY2FwLXRhYmxlXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgb3B0aW9uIGdyYW50OlwiLCBlcnJvcik7XG4gICAgcmV0dXJuIHsgZXJyb3JzOiB7IF9mb3JtOiBbXCJGYWlsZWQgdG8gY3JlYXRlIG9wdGlvbiBncmFudFwiXSB9IH07XG4gIH1cblxuICByZWRpcmVjdChcIi9vcHRpb25zXCIpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZXhlcmNpc2VPcHRpb25zKFxuICBncmFudElkOiBzdHJpbmcsXG4gIGZvcm1EYXRhOiBGb3JtRGF0YVxuKTogUHJvbWlzZTx7IGVycm9yPzogc3RyaW5nIH0+IHtcbiAgY29uc3QgZ3JhbnQgPSBhd2FpdCBwcmlzbWEub3B0aW9uR3JhbnQuZmluZFVuaXF1ZSh7XG4gICAgd2hlcmU6IHsgaWQ6IGdyYW50SWQgfSxcbiAgICBpbmNsdWRlOiB7XG4gICAgICB2ZXN0aW5nU2NoZWR1bGU6IHtcbiAgICAgICAgaW5jbHVkZTogeyB2ZXN0aW5nUGVyaW9kczogdHJ1ZSB9LFxuICAgICAgfSxcbiAgICAgIGV4ZXJjaXNlczoge1xuICAgICAgICB3aGVyZTogeyBzdGF0dXM6IHsgaW46IFtcIkFQUFJPVkVEXCIsIFwiQ09NUExFVEVEXCJdIH0gfSxcbiAgICAgIH0sXG4gICAgICBzdGFrZWhvbGRlcjogdHJ1ZSxcbiAgICAgIGVxdWl0eVBsYW46IHRydWUsXG4gICAgfSxcbiAgfSk7XG5cbiAgaWYgKCFncmFudCkge1xuICAgIHJldHVybiB7IGVycm9yOiBcIkdyYW50IG5vdCBmb3VuZFwiIH07XG4gIH1cblxuICBjb25zdCBzaGFyZXNUb0V4ZXJjaXNlID0gcGFyc2VJbnQoZm9ybURhdGEuZ2V0KFwic2hhcmVzVG9FeGVyY2lzZVwiKSBhcyBzdHJpbmcsIDEwKTtcbiAgY29uc3QgcGF5bWVudE1ldGhvZCA9IGZvcm1EYXRhLmdldChcInBheW1lbnRNZXRob2RcIikgYXMgc3RyaW5nO1xuICBjb25zdCBmbXZBdEV4ZXJjaXNlID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJmbXZBdEV4ZXJjaXNlXCIpIGFzIHN0cmluZyk7XG5cbiAgaWYgKCFzaGFyZXNUb0V4ZXJjaXNlIHx8IHNoYXJlc1RvRXhlcmNpc2UgPD0gMCkge1xuICAgIHJldHVybiB7IGVycm9yOiBcIkludmFsaWQgbnVtYmVyIG9mIHNoYXJlc1wiIH07XG4gIH1cblxuICAvLyBDYWxjdWxhdGUgdmVzdGVkIGFuZCBleGVyY2lzYWJsZVxuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICBsZXQgdmVzdGVkU2hhcmVzID0gMDtcbiAgaWYgKGdyYW50LnZlc3RpbmdTY2hlZHVsZSkge1xuICAgIGZvciAoY29uc3QgcGVyaW9kIG9mIGdyYW50LnZlc3RpbmdTY2hlZHVsZS52ZXN0aW5nUGVyaW9kcykge1xuICAgICAgaWYgKG5ldyBEYXRlKHBlcmlvZC52ZXN0aW5nRGF0ZSkgPD0gbm93KSB7XG4gICAgICAgIHZlc3RlZFNoYXJlcyA9IHBlcmlvZC5jdW11bGF0aXZlVmVzdGVkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGV4ZXJjaXNlZCA9IGdyYW50LmV4ZXJjaXNlcy5yZWR1Y2UoKHN1bSwgZXgpID0+IHN1bSArIGV4LnNoYXJlc0V4ZXJjaXNlZCwgMCk7XG4gIGNvbnN0IGV4ZXJjaXNhYmxlID0gdmVzdGVkU2hhcmVzIC0gZXhlcmNpc2VkO1xuXG4gIGlmIChzaGFyZXNUb0V4ZXJjaXNlID4gZXhlcmNpc2FibGUpIHtcbiAgICByZXR1cm4geyBlcnJvcjogYENhbm5vdCBleGVyY2lzZSBtb3JlIHRoYW4gJHtleGVyY2lzYWJsZS50b0xvY2FsZVN0cmluZygpfSBzaGFyZXNgIH07XG4gIH1cblxuICB0cnkge1xuICAgIC8vIEdldCBjb21tb24gc2hhcmUgY2xhc3MgZm9yIHRoZSBjZXJ0aWZpY2F0ZVxuICAgIGNvbnN0IGNvbW1vbkNsYXNzID0gYXdhaXQgcHJpc21hLnNoYXJlQ2xhc3MuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7IGNvbXBhbnlJZDogZ3JhbnQuY29tcGFueUlkLCB0eXBlOiBcIkNPTU1PTlwiIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWNvbW1vbkNsYXNzKSB7XG4gICAgICByZXR1cm4geyBlcnJvcjogXCJObyBjb21tb24gc2hhcmUgY2xhc3MgZm91bmRcIiB9O1xuICAgIH1cblxuICAgIC8vIEdlbmVyYXRlIGNlcnRpZmljYXRlIHNlY3VyaXR5IElEXG4gICAgY29uc3QgY2VydFNlY3VyaXR5SWQgPSBhd2FpdCBnZW5lcmF0ZVNlY3VyaXR5SWQoXCJDU1wiLCBncmFudC5jb21wYW55SWQpO1xuXG4gICAgY29uc3QgdG90YWxDb3N0ID0gc2hhcmVzVG9FeGVyY2lzZSAqIE51bWJlcihncmFudC5leGVyY2lzZVByaWNlKTtcblxuICAgIC8vIENyZWF0ZSBjZXJ0aWZpY2F0ZSBhbmQgZXhlcmNpc2UgaW4gdHJhbnNhY3Rpb25cbiAgICBhd2FpdCBwcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jICh0eCkgPT4ge1xuICAgICAgLy8gQ3JlYXRlIHRoZSBzaGFyZSBjZXJ0aWZpY2F0ZVxuICAgICAgY29uc3QgY2VydGlmaWNhdGUgPSBhd2FpdCB0eC5zaGFyZUNlcnRpZmljYXRlLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjb21wYW55SWQ6IGdyYW50LmNvbXBhbnlJZCxcbiAgICAgICAgICBzZWN1cml0eUlkOiBjZXJ0U2VjdXJpdHlJZCxcbiAgICAgICAgICBzdGFrZWhvbGRlcklkOiBncmFudC5zdGFrZWhvbGRlcklkLFxuICAgICAgICAgIHNoYXJlQ2xhc3NJZDogY29tbW9uQ2xhc3MuaWQsXG4gICAgICAgICAgcXVhbnRpdHk6IHNoYXJlc1RvRXhlcmNpc2UsXG4gICAgICAgICAgcHJpY2VQZXJTaGFyZTogZ3JhbnQuZXhlcmNpc2VQcmljZSxcbiAgICAgICAgICBjYXNoUGFpZDogdG90YWxDb3N0LFxuICAgICAgICAgIGNvc3RCYXNpczogdG90YWxDb3N0LFxuICAgICAgICAgIGFjcXVpc2l0aW9uRGF0ZTogbm93LFxuICAgICAgICAgIGlzc3VlRGF0ZTogbm93LFxuICAgICAgICAgIHN0YXR1czogXCJPVVRTVEFORElOR1wiLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIENyZWF0ZSB0aGUgZXhlcmNpc2UgcmVjb3JkXG4gICAgICBhd2FpdCB0eC5vcHRpb25FeGVyY2lzZS5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgb3B0aW9uR3JhbnRJZDogZ3JhbnRJZCxcbiAgICAgICAgICBzaGFyZUNlcnRpZmljYXRlSWQ6IGNlcnRpZmljYXRlLmlkLFxuICAgICAgICAgIHNoYXJlc0V4ZXJjaXNlZDogc2hhcmVzVG9FeGVyY2lzZSxcbiAgICAgICAgICBleGVyY2lzZVByaWNlOiBncmFudC5leGVyY2lzZVByaWNlLFxuICAgICAgICAgIHRvdGFsQ29zdCxcbiAgICAgICAgICBleGVyY2lzZURhdGU6IG5vdyxcbiAgICAgICAgICBmbXZBdEV4ZXJjaXNlLFxuICAgICAgICAgIHBheW1lbnRNZXRob2Q6IHBheW1lbnRNZXRob2QgYXMgYW55LFxuICAgICAgICAgIHN0YXR1czogXCJDT01QTEVURURcIixcbiAgICAgICAgICBhcHByb3ZlZEF0OiBub3csXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgLy8gVXBkYXRlIGdyYW50IHN0YXR1cyBpZiBmdWxseSBleGVyY2lzZWRcbiAgICAgIGNvbnN0IG5ld1RvdGFsRXhlcmNpc2VkID0gZXhlcmNpc2VkICsgc2hhcmVzVG9FeGVyY2lzZTtcbiAgICAgIGNvbnN0IG5ld1N0YXR1cyA9XG4gICAgICAgIG5ld1RvdGFsRXhlcmNpc2VkID49IGdyYW50Lm9yaWdpbmFsUXVhbnRpdHkgLSBncmFudC5leHBpcmVkUXVhbnRpdHlcbiAgICAgICAgICA/IFwiRlVMTFlfRVhFUkNJU0VEXCJcbiAgICAgICAgICA6IFwiUEFSVElBTExZX0VYRVJDSVNFRFwiO1xuXG4gICAgICBhd2FpdCB0eC5vcHRpb25HcmFudC51cGRhdGUoe1xuICAgICAgICB3aGVyZTogeyBpZDogZ3JhbnRJZCB9LFxuICAgICAgICBkYXRhOiB7IHN0YXR1czogbmV3U3RhdHVzIH0sXG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBhdWRpdCBsb2dcbiAgICBhd2FpdCBwcmlzbWEuYXVkaXRMb2cuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29tcGFueUlkOiBncmFudC5jb21wYW55SWQsXG4gICAgICAgIGFjdGlvbjogXCJFWEVSQ0lTRVwiLFxuICAgICAgICBlbnRpdHlUeXBlOiBcIk9wdGlvbkdyYW50XCIsXG4gICAgICAgIGVudGl0eUlkOiBncmFudElkLFxuICAgICAgICBhZnRlcjogeyBzaGFyZXNUb0V4ZXJjaXNlLCBwYXltZW50TWV0aG9kLCBmbXZBdEV4ZXJjaXNlIH0sXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvb3B0aW9uc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL29wdGlvbnMvJHtncmFudElkfWApO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2NlcnRpZmljYXRlc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9jYXAtdGFibGVcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBleGVyY2lzaW5nIG9wdGlvbnM6XCIsIGVycm9yKTtcbiAgICByZXR1cm4geyBlcnJvcjogXCJGYWlsZWQgdG8gZXhlcmNpc2Ugb3B0aW9uc1wiIH07XG4gIH1cblxuICByZWRpcmVjdChgL29wdGlvbnMvJHtncmFudElkfWApO1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3U0E4Q3NCLDhMQUFBIn0=
}),
"[project]/src/app/(admin)/options/option-form.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OptionForm",
    ()=>OptionForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/label.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/textarea.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$admin$292f$options$2f$data$3a$0eb4a6__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/src/app/(admin)/options/data:0eb4a6 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-ssr] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/building-2.js [app-ssr] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
"use client";
;
;
;
;
;
;
;
;
;
;
function OptionForm({ stakeholders, equityPlans }) {
    const initialState = {
        errors: {}
    };
    const [state, formAction, isPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useActionState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$admin$292f$options$2f$data$3a$0eb4a6__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createOptionGrant"], initialState);
    const formatDateForInput = (date)=>{
        if (!date) return "";
        const d = new Date(date);
        return d.toISOString().split("T")[0];
    };
    const today = formatDateForInput(new Date());
    const tenYearsFromNow = formatDateForInput(new Date(Date.now() + 10 * 365 * 24 * 60 * 60 * 1000));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        action: formAction,
        className: "space-y-6",
        children: [
            state.errors?._form && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded",
                children: state.errors._form.join(", ")
            }, void 0, false, {
                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                "Option Grant Holder"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "stakeholderId",
                                        children: "Stakeholder *"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                        lineNumber: 52,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                        id: "stakeholderId",
                                        name: "stakeholderId",
                                        required: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select a stakeholder..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 54,
                                                columnNumber: 15
                                            }, this),
                                            stakeholders.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: s.id,
                                                    children: [
                                                        s.name,
                                                        " (",
                                                        s.email,
                                                        ")"
                                                    ]
                                                }, s.id, true, {
                                                    fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                    lineNumber: 56,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                        lineNumber: 53,
                                        columnNumber: 13
                                    }, this),
                                    state.errors?.stakeholderId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-500 mt-1",
                                        children: state.errors.stakeholderId.join(", ")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                        lineNumber: 62,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "grantReason",
                                        children: "Grant Reason"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                        lineNumber: 69,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$textarea$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Textarea"], {
                                        id: "grantReason",
                                        name: "grantReason",
                                        placeholder: "e.g., New hire grant, Promotion, Refresh grant...",
                                        rows: 2
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                        lineNumber: 70,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "status",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                        lineNumber: 79,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                        id: "status",
                                        name: "status",
                                        defaultValue: "ACTIVE",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "ACTIVE",
                                                children: "Active"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "PARTIALLY_EXERCISED",
                                                children: "Partially Exercised"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 82,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "FULLY_EXERCISED",
                                                children: "Fully Exercised"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 83,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "EXPIRED",
                                                children: "Expired"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 84,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "CANCELLED",
                                                children: "Cancelled"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 85,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "TERMINATED",
                                                children: "Terminated"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                        lineNumber: 80,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                "Grant Details"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "originalQuantity",
                                            children: "Number of Options *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                            lineNumber: 103,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "originalQuantity",
                                            name: "originalQuantity",
                                            type: "number",
                                            min: "1",
                                            step: "1",
                                            placeholder: "50,000",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this),
                                        state.errors?.originalQuantity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-500 mt-1",
                                            children: state.errors.originalQuantity.join(", ")
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                            lineNumber: 114,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "exercisePrice",
                                            children: "Exercise Price *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                            lineNumber: 121,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                            id: "exercisePrice",
                                            name: "exercisePrice",
                                            type: "number",
                                            min: "0",
                                            step: "0.0001",
                                            placeholder: "0.10",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                            lineNumber: 122,
                                            columnNumber: 15
                                        }, this),
                                        state.errors?.exercisePrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-500 mt-1",
                                            children: state.errors.exercisePrice.join(", ")
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                            htmlFor: "type",
                                            children: "Option Type *"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                            id: "type",
                                            name: "type",
                                            defaultValue: "ISO",
                                            required: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "ISO",
                                                    children: "ISO (Incentive Stock Option)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "NSO",
                                                    children: "NSO (Non-Qualified Stock Option)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                            lineNumber: 140,
                                            columnNumber: 15
                                        }, this),
                                        state.errors?.type && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-red-500 mt-1",
                                            children: state.errors.type.join(", ")
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                            lineNumber: 145,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                lineNumber: 93,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                    lineNumber: 158,
                                    columnNumber: 13
                                }, this),
                                "Issuer Information"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                            lineNumber: 157,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "equityPlanId",
                                        children: "Equity Plan *"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                        lineNumber: 164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                        id: "equityPlanId",
                                        name: "equityPlanId",
                                        required: true,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                children: "Select an equity plan..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 166,
                                                columnNumber: 15
                                            }, this),
                                            equityPlans.map((plan)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: plan.id,
                                                    children: [
                                                        plan.name,
                                                        " (",
                                                        plan.availableShares.toLocaleString(),
                                                        " available)"
                                                    ]
                                                }, plan.id, true, {
                                                    fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 17
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                        lineNumber: 165,
                                        columnNumber: 13
                                    }, this),
                                    state.errors?.equityPlanId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-red-500 mt-1",
                                        children: state.errors.equityPlanId.join(", ")
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "grantDate",
                                                children: "Grant Date *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 182,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "grantDate",
                                                name: "grantDate",
                                                type: "date",
                                                defaultValue: today,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 183,
                                                columnNumber: 15
                                            }, this),
                                            state.errors?.grantDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-red-500 mt-1",
                                                children: state.errors.grantDate.join(", ")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 191,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                        lineNumber: 181,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "boardApprovalDate",
                                                children: "Board Approval Date"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 198,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "boardApprovalDate",
                                                name: "boardApprovalDate",
                                                type: "date",
                                                defaultValue: today
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 199,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "expirationDate",
                                                children: "Expiration Date *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 208,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "expirationDate",
                                                name: "expirationDate",
                                                type: "date",
                                                defaultValue: tenYearsFromNow,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 209,
                                                columnNumber: 15
                                            }, this),
                                            state.errors?.expirationDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-red-500 mt-1",
                                                children: state.errors.expirationDate.join(", ")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 217,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                lineNumber: 180,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                        lineNumber: 162,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                lineNumber: 155,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardHeader"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                "Vesting Schedule"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                        htmlFor: "scheduleName",
                                        children: "Schedule Name"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                        id: "scheduleName",
                                        name: "scheduleName",
                                        placeholder: "e.g., Standard 4-year"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                        lineNumber: 237,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "vestingStartDate",
                                                children: "Vesting Start Date *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 246,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "vestingStartDate",
                                                name: "vestingStartDate",
                                                type: "date",
                                                defaultValue: today,
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 247,
                                                columnNumber: 15
                                            }, this),
                                            state.errors?.vestingStartDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-red-500 mt-1",
                                                children: state.errors.vestingStartDate.join(", ")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 255,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "periodUnit",
                                                children: "Period Unit"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 262,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                id: "periodUnit",
                                                name: "periodUnit",
                                                defaultValue: "MONTHLY",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "MONTHLY",
                                                        children: "Monthly"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                        lineNumber: 264,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "QUARTERLY",
                                                        children: "Quarterly"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                        lineNumber: 265,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "ANNUALLY",
                                                        children: "Annually"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                        lineNumber: 266,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 263,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                        lineNumber: 261,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "cliffMonths",
                                                children: "Cliff (months) *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 271,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "cliffMonths",
                                                name: "cliffMonths",
                                                type: "number",
                                                min: "0",
                                                step: "1",
                                                defaultValue: "12",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 272,
                                                columnNumber: 15
                                            }, this),
                                            state.errors?.cliffMonths && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-red-500 mt-1",
                                                children: state.errors.cliffMonths.join(", ")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 282,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                        lineNumber: 270,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "cliffPercentage",
                                                children: "Cliff Percentage *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 289,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                id: "cliffPercentage",
                                                name: "cliffPercentage",
                                                defaultValue: "0.25",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "0",
                                                        children: "0%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                        lineNumber: 291,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "0.25",
                                                        children: "25%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "0.5",
                                                        children: "50%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                        lineNumber: 293,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "1",
                                                        children: "100%"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                        lineNumber: 294,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 290,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                        lineNumber: 288,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "totalPeriods",
                                                children: "Total Periods *"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 299,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "totalPeriods",
                                                name: "totalPeriods",
                                                type: "number",
                                                min: "1",
                                                step: "1",
                                                defaultValue: "48",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 300,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-muted-foreground mt-1",
                                                children: "e.g., 48 for 4-year monthly vesting"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 309,
                                                columnNumber: 15
                                            }, this),
                                            state.errors?.totalPeriods && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-red-500 mt-1",
                                                children: state.errors.totalPeriods.join(", ")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                                lineNumber: 313,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                        lineNumber: 298,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-muted/50 p-4 rounded-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-muted-foreground",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Default:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                            lineNumber: 322,
                                            columnNumber: 15
                                        }, this),
                                        " 4-year vesting with 1-year cliff (25% vests at cliff, then 1/48th monthly)"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                                lineNumber: 320,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                        lineNumber: 234,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                lineNumber: 227,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-end gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "button",
                        variant: "outline",
                        onClick: ()=>history.back(),
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                        lineNumber: 331,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        type: "submit",
                        disabled: isPending,
                        children: isPending ? "Creating..." : "Grant Options"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                        lineNumber: 334,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(admin)/options/option-form.tsx",
                lineNumber: 330,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/(admin)/options/option-form.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_69dc6ffe._.js.map