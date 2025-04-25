import { SubscriptionButton } from "@/components/subscription-button";

const SettingPage = async () => {
    
    return (
        <div className="h-full p-4 space-y-2">
            <h3 className="text-lg font-medium">Settings</h3>
            <div className="text-muted-foreground text-sm">
                {true}
            </div>
            <SubscriptionButton isPro={true}/>
        </div>
    );
}

export default SettingPage