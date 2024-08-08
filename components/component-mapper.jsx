import { AirtableBase, AirtableForm } from "mdx-embed2/dist/components/airtable";
import { Buzzsprout } from "mdx-embed2/dist/components/buzzsprout";
import { Cinnamon } from "mdx-embed2/dist/components/cinnamon";
import { CodePen } from "mdx-embed2/dist/components/codepen";
import { CodeSandbox } from "mdx-embed2/dist/components/codesandbox";
import { EggheadLesson } from "mdx-embed2/dist/components/egghead";
import { Figma } from "mdx-embed2/dist/components/figma";
import { Flickr } from "mdx-embed2/dist/components/flickr";
import { Gist } from "mdx-embed2/dist/components/gist";
import { Instagram } from "mdx-embed2/dist/components/instagram";
import { Lbry } from "mdx-embed2/dist/components/lbry";
import { LinkedInBadge } from "mdx-embed2/dist/components/linkedin";
import { Pin, PinterestBoard, PinterestFollowButton } from "mdx-embed2/dist/components/pinterest";
import { Replit } from "mdx-embed2/dist/components/replit";
import { SimplecastEpisode } from "mdx-embed2/dist/components/simplecast";
import { Snack } from "mdx-embed2/dist/components/snack";
import { SoundCloud } from "mdx-embed2/dist/components/soundcloud";
import { Spotify } from "mdx-embed2/dist/components/spotify";
import { TikTok } from "mdx-embed2/dist/components/tiktok";
import { Twitch } from "mdx-embed2/dist/components/twitch";
import { Tweet, TwitterFollowButton, TwitterHashtagButton, TwitterList, TwitterMentionButton, TwitterTimeline } from "mdx-embed2/dist/components/twitter";
import { Vimeo } from "mdx-embed2/dist/components/vimeo";
import { Whimsical } from "mdx-embed2/dist/components/whimsical";
import { Wikipedia } from "mdx-embed2/dist/components/wikipedia";
import { Wistia } from "mdx-embed2/dist/components/wistia";
import { YouTube } from "mdx-embed2/dist/components/youtube";

import Counter from './example-counter';
import GithubTestRunner from './github-test-runner';
import {
	Accordion,
	Blockquote,
	Code,
	CustomImage,
	CustomLink,
	H1,
	H2,
	H3,
	H4,
	H5,
	H6,
	Hr,
	Ol,
	P,
	Tab,
	Table,
	Tabs,
	Tbody,
	Td,
	Th,
	Thead,
	Tr,
	Ul
} from './mdx-components';

export const componentMap = {
	// Example Counter Component
	Counter,
	GithubTestRunner,

	// NextBook Components
	Accordion,
	Tab,
	Tabs,
	table: Table,
	thead: Thead,
	tbody: Tbody,
	tr: Tr,
	td: Td,
	th: Th,
	a: CustomLink,
	img: CustomImage,
	blockquote: Blockquote,
	code: Code,
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H5,
	h6: H6,
	ol: Ol,
	ul: Ul,
	hr: Hr,
	p: P,

	// mdx-embed2
	AirtableBase,
	AirtableForm,
	Buzzsprout,
	Cinnamon,
	CodePen,
	CodeSandbox,
	EggheadLesson,
	Figma,
	Flickr,
	Gist,
	Instagram,
	Lbry,
	LinkedInBadge,
	Pin,
	PinterestBoard,
	PinterestFollowButton,
	Replit,
	SimplecastEpisode,
	Snack,
	SoundCloud,
	Spotify,
	TikTok,
	Twitch,
	Tweet,
	TwitterFollowButton,
	TwitterHashtagButton,
	TwitterList,
	TwitterMentionButton,
	TwitterTimeline,
	Vimeo,
	Whimsical,
	Wikipedia,
	Wistia,
	YouTube,
}
