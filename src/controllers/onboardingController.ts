import { Request, Response, NextFunction } from "express";
import { OnboardingModel } from "@models/onboardingModel";

const onboardingModel = new OnboardingModel();

const getOnboardingStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Get the onboarding status from the database for the specific userId
        res.locals.onboardingStatus = await onboardingModel.getOnboardingStatus(req.params.userId);
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error." });
    }
}

const updateOnboardingStatus = async (req: Request, res: Response, next: NextFunction) => {
    try {
        // Update the onboarding status in the database for the specific userId and stepName
        res.locals.onboardingStatus = await onboardingModel.updateOnboardingStatus(req.params.userId, req.params.stepName);
        next();
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error." });
    }
}

export {
    getOnboardingStatus,
    updateOnboardingStatus
}