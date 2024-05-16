import { SvelteComponent } from "svelte";
import { type FlyParams } from 'svelte/transition';
declare const __propDef: {
    props: {
        videoUrl: string;
        trackHeightPx: number;
        animations: {
            enter: {
                time: number;
                transition: {
                    data: FlyParams;
                    type: string;
                };
            };
            html: string;
            leave: {
                time: number;
                transition: {
                    data: FlyParams;
                    type: string;
                };
            };
            position: {
                x: string;
                y: string;
            };
        }[];
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type VideoScrollerProps = typeof __propDef.props;
export type VideoScrollerEvents = typeof __propDef.events;
export type VideoScrollerSlots = typeof __propDef.slots;
export default class VideoScroller extends SvelteComponent<VideoScrollerProps, VideoScrollerEvents, VideoScrollerSlots> {
}
export {};
