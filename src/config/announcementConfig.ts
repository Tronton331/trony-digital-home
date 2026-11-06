import type { AnnouncementConfig } from "@/types/announcementConfig";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * Announcement
 */
export const announcementConfig: AnnouncementConfig = withUserConfig(
	"announcement",
	{
		title: "", // Title of the announcement (default: "Announcement")
		content: "This is first deployment of Trony's Digital Home. Some information may not change immediately.", // Content of the announcement
		closable: false, // User can close the announcement
		link: {
			enable: false, // Enable the link in the announcement
			text: "GitHub", // 链接文本
			url: "https://github.com", // 链接 URL
			external: true, // 外部链接
		},
	},
);
