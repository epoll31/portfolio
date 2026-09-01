import BounceIn from "@/components/effects/bounceIn";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chicken Foot Score Tracker — Support & Privacy",
  description:
    "Support and privacy policy for the Chicken Foot Score Tracker iOS app.",
};

export default function ChickenFootScoreTrackerPage() {
  return (
    <BounceIn>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Chicken Foot Score Tracker</h1>
          <p className="text-gray-500 dark:text-gray-300">
            A simple scorekeeper for the domino game Chicken Foot. No
            accounts, no ads, no internet connection required — everything
            stays on your device.
          </p>
        </div>

        <div id="support" className="flex flex-col gap-2 scroll-mt-20">
          <h3 className="text-lg font-semibold -mb-2">Support</h3>
          <p className="text-gray-500 dark:text-gray-300">
            Running into a bug, have a question, or want to request a
            feature? Email me at{" "}
            <a
              href="mailto:epollack31@gmail.com"
              className="underline hover:text-gray-700 dark:hover:text-gray-100"
            >
              epollack31@gmail.com
            </a>{" "}
            and I&apos;ll get back to you.
          </p>
        </div>

        <div id="privacy" className="flex flex-col gap-2 scroll-mt-20">
          <h3 className="text-lg font-semibold -mb-2">Privacy Policy</h3>
          <p className="text-gray-500 dark:text-gray-300">
            Chicken Foot Score Tracker does not collect, store, transmit, or
            share any personal data. The app has no accounts, no analytics,
            no third-party SDKs, and makes no network requests.
          </p>
          <p className="text-gray-500 dark:text-gray-300">
            Every game you create — players, rounds, and scores — is saved
            only in local storage on your own device. Nothing ever leaves
            your phone, and I (the developer) have no access to it.
          </p>
          <p className="text-gray-500 dark:text-gray-300">
            If this policy ever changes, this page will be updated to
            reflect that.
          </p>
          <p className="text-sm text-gray-400 dark:text-gray-500">
            Last updated September 1, 2026.
          </p>
        </div>
      </div>
    </BounceIn>
  );
}
