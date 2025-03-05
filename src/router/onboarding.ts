import express, { Request, Response, Router } from "express";

const onboardingRouter: Router = express.Router();

onboardingRouter.get('/onboardingStatus/:userId', (req: Request, res: Response) => {
    res.status(201).json({ success: true, message: "Onboarding status retrieved successfully", data: res.locals.onboardingStatus });
});

onboardingRouter.patch('onboardingStatus/:userId/:stepName', (req: Request, res: Response) => {

    res.status(201).json({ success: true, message: "Onboarding status updated successfully", data: res.locals.onboardingStatus });
})

export default onboardingRouter;