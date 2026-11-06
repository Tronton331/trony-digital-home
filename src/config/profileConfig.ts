import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/rina-avatar.jpg", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "Trony",
	bio: "If you know you know",
	links: [
        {
            name: "GitHub",
            icon: "fa7-brands:github",
            url: "https://github.com/Tronton331",
        },
		{
			name: "Steam",
			icon: "fa7-brands:steam",
			url: "https://steamcommunity.com/id/tronton331/",
		},
		{
			name: "OSU!",
			icon: "simple-icons:osu",
			url: "https://osu.ppy.sh/users/23278785",
		},
	],
});
