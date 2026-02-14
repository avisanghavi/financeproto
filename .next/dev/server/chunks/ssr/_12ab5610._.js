module.exports = [
"[project]/src/app/(admin)/settings/actions.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

/* __next_internal_action_entry_do_not_use__ [{"4031546e993b1d8b57f4bf4f99b03f51a3e6498649":"deleteShareClass","403454b6924c676099b95a02fe7cdcc5ee743f2a7c":"deleteEquityPlan","606d28788ae77f3bd8c243d8fb49c039d3973ac26b":"createEquityPlan","6085d2601f22c78b6db5a7c2121b4c253471c0e404":"createShareClass","60ca32bd5031c3e409cc7c740abcb21c05456b2a4b":"updateCompany","60fa2fcd7ec9082a1fd442e3b93ce6480a6980de0f":"createCompany"},"",""] */ __turbopack_context__.s([
    "createCompany",
    ()=>createCompany,
    "createEquityPlan",
    ()=>createEquityPlan,
    "createShareClass",
    ()=>createShareClass,
    "deleteEquityPlan",
    ()=>deleteEquityPlan,
    "deleteShareClass",
    ()=>deleteShareClass,
    "updateCompany",
    ()=>updateCompany
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/prisma.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-rsc] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
// ============================================
// COMPANY ACTIONS
// ============================================
const companySchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Company name is required"),
    legalName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional(),
    incorporationDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Incorporation date is required"),
    incorporationState: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Incorporation state is required"),
    authorizedShares: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().positive("Authorized shares must be positive"),
    parValue: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().positive("Par value must be positive")
});
async function createCompany(prevState, formData) {
    const validatedFields = companySchema.safeParse({
        name: formData.get("name"),
        legalName: formData.get("legalName") || undefined,
        incorporationDate: formData.get("incorporationDate"),
        incorporationState: formData.get("incorporationState"),
        authorizedShares: formData.get("authorizedShares"),
        parValue: formData.get("parValue")
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        };
    }
    try {
        // Check if company already exists
        const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company.findFirst();
        if (existing) {
            return {
                errors: {
                    _form: [
                        "A company already exists. Please edit the existing company."
                    ]
                }
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company.create({
            data: {
                name: validatedFields.data.name,
                legalName: validatedFields.data.legalName || null,
                incorporationDate: new Date(validatedFields.data.incorporationDate),
                incorporationState: validatedFields.data.incorporationState,
                authorizedShares: validatedFields.data.authorizedShares,
                parValue: validatedFields.data.parValue
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/settings");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    } catch (error) {
        console.error("Error creating company:", error);
        return {
            errors: {
                _form: [
                    "Failed to create company. Please try again."
                ]
            }
        };
    }
    return {
        success: true
    };
}
async function updateCompany(prevState, formData) {
    const id = formData.get("id");
    const validatedFields = companySchema.safeParse({
        name: formData.get("name"),
        legalName: formData.get("legalName") || undefined,
        incorporationDate: formData.get("incorporationDate"),
        incorporationState: formData.get("incorporationState"),
        authorizedShares: formData.get("authorizedShares"),
        parValue: formData.get("parValue")
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        };
    }
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].company.update({
            where: {
                id
            },
            data: {
                name: validatedFields.data.name,
                legalName: validatedFields.data.legalName || null,
                incorporationDate: new Date(validatedFields.data.incorporationDate),
                incorporationState: validatedFields.data.incorporationState,
                authorizedShares: validatedFields.data.authorizedShares,
                parValue: validatedFields.data.parValue
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/settings");
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/");
    } catch (error) {
        console.error("Error updating company:", error);
        return {
            errors: {
                _form: [
                    "Failed to update company. Please try again."
                ]
            }
        };
    }
    return {
        success: true
    };
}
// ============================================
// SHARE CLASS ACTIONS
// ============================================
const shareClassSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Share class name is required"),
    type: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "COMMON",
        "PREFERRED"
    ]),
    authorizedShares: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().positive("Authorized shares must be positive"),
    pricePerShare: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().positive("Price per share must be positive"),
    conversionRatio: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().positive().optional(),
    liquidationPreference: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().optional(),
    liquidationMultiple: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().optional(),
    participatingPreferred: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.boolean().optional(),
    seniority: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().optional()
});
async function createShareClass(prevState, formData) {
    const companyId = formData.get("companyId");
    const validatedFields = shareClassSchema.safeParse({
        name: formData.get("name"),
        type: formData.get("type"),
        authorizedShares: formData.get("authorizedShares"),
        pricePerShare: formData.get("pricePerShare"),
        conversionRatio: formData.get("conversionRatio") || undefined,
        liquidationPreference: formData.get("liquidationPreference") || undefined,
        liquidationMultiple: formData.get("liquidationMultiple") || undefined,
        participatingPreferred: formData.get("participatingPreferred") === "true",
        seniority: formData.get("seniority") || undefined
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        };
    }
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].shareClass.create({
            data: {
                companyId,
                name: validatedFields.data.name,
                type: validatedFields.data.type,
                authorizedShares: validatedFields.data.authorizedShares,
                pricePerShare: validatedFields.data.pricePerShare,
                conversionRatio: validatedFields.data.conversionRatio ?? 1,
                liquidationPreference: validatedFields.data.liquidationPreference,
                liquidationMultiple: validatedFields.data.liquidationMultiple,
                participatingPreferred: validatedFields.data.participatingPreferred ?? false,
                seniority: validatedFields.data.seniority ?? 0
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/settings");
    } catch (error) {
        console.error("Error creating share class:", error);
        return {
            errors: {
                _form: [
                    "Failed to create share class. Please try again."
                ]
            }
        };
    }
    return {
        success: true
    };
}
async function deleteShareClass(id) {
    try {
        // Check if there are any certificates using this share class
        const certificateCount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].shareCertificate.count({
            where: {
                shareClassId: id
            }
        });
        if (certificateCount > 0) {
            return {
                error: `Cannot delete share class. It has ${certificateCount} certificate(s) associated with it.`
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].shareClass.delete({
            where: {
                id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/settings");
        return {};
    } catch (error) {
        console.error("Error deleting share class:", error);
        return {
            error: "Failed to delete share class."
        };
    }
}
// ============================================
// EQUITY PLAN ACTIONS
// ============================================
const equityPlanSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Plan name is required"),
    totalPoolSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].coerce.number().int().positive("Pool size must be positive"),
    boardApprovalDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Board approval date is required"),
    expirationDate: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().min(1, "Expiration date is required")
});
async function createEquityPlan(prevState, formData) {
    const companyId = formData.get("companyId");
    const validatedFields = equityPlanSchema.safeParse({
        name: formData.get("name"),
        totalPoolSize: formData.get("totalPoolSize"),
        boardApprovalDate: formData.get("boardApprovalDate"),
        expirationDate: formData.get("expirationDate")
    });
    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors
        };
    }
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].equityPlan.create({
            data: {
                companyId,
                name: validatedFields.data.name,
                totalPoolSize: validatedFields.data.totalPoolSize,
                availableShares: validatedFields.data.totalPoolSize,
                boardApprovalDate: new Date(validatedFields.data.boardApprovalDate),
                expirationDate: new Date(validatedFields.data.expirationDate)
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/settings");
    } catch (error) {
        console.error("Error creating equity plan:", error);
        return {
            errors: {
                _form: [
                    "Failed to create equity plan. Please try again."
                ]
            }
        };
    }
    return {
        success: true
    };
}
async function deleteEquityPlan(id) {
    try {
        // Check if there are any grants using this plan
        const grantCount = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].optionGrant.count({
            where: {
                equityPlanId: id
            }
        });
        if (grantCount > 0) {
            return {
                error: `Cannot delete equity plan. It has ${grantCount} grant(s) associated with it.`
            };
        }
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$prisma$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["prisma"].equityPlan.delete({
            where: {
                id
            }
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])("/settings");
        return {};
    } catch (error) {
        console.error("Error deleting equity plan:", error);
        return {
            error: "Failed to delete equity plan."
        };
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    createCompany,
    updateCompany,
    createShareClass,
    deleteShareClass,
    createEquityPlan,
    deleteEquityPlan
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createCompany, "60fa2fcd7ec9082a1fd442e3b93ce6480a6980de0f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateCompany, "60ca32bd5031c3e409cc7c740abcb21c05456b2a4b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createShareClass, "6085d2601f22c78b6db5a7c2121b4c253471c0e404", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteShareClass, "4031546e993b1d8b57f4bf4f99b03f51a3e6498649", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createEquityPlan, "606d28788ae77f3bd8c243d8fb49c039d3973ac26b", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteEquityPlan, "403454b6924c676099b95a02fe7cdcc5ee743f2a7c", null);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(admin)/settings/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/(admin)/settings/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$admin$292f$settings$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(admin)/settings/actions.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$admin$292f$settings$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$admin$292f$settings$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
;
;
;
;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/.next-internal/server/app/(admin)/settings/page/actions.js { ACTIONS_MODULE0 => \"[project]/src/app/(admin)/settings/actions.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "4031546e993b1d8b57f4bf4f99b03f51a3e6498649",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$admin$292f$settings$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteShareClass"],
    "403454b6924c676099b95a02fe7cdcc5ee743f2a7c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$admin$292f$settings$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteEquityPlan"],
    "606d28788ae77f3bd8c243d8fb49c039d3973ac26b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$admin$292f$settings$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createEquityPlan"],
    "6085d2601f22c78b6db5a7c2121b4c253471c0e404",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$admin$292f$settings$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createShareClass"],
    "60ca32bd5031c3e409cc7c740abcb21c05456b2a4b",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$admin$292f$settings$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateCompany"],
    "60fa2fcd7ec9082a1fd442e3b93ce6480a6980de0f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$admin$292f$settings$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createCompany"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$admin$292f$settings$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$admin$292f$settings$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/.next-internal/server/app/(admin)/settings/page/actions.js { ACTIONS_MODULE0 => "[project]/src/app/(admin)/settings/actions.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$admin$292f$settings$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/(admin)/settings/actions.ts [app-rsc] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$admin$292f$settings$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$admin$292f$settings$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$admin$292f$settings$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f2e$next$2d$internal$2f$server$2f$app$2f28$admin$292f$settings$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$src$2f$app$2f28$admin$292f$settings$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$admin$292f$settings$2f$actions$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=_12ab5610._.js.map