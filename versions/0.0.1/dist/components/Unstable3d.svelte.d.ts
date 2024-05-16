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
export type Unstable3dProps = typeof __propDef.props;
export type Unstable3dEvents = typeof __propDef.events;
export type Unstable3dSlots = typeof __propDef.slots;
export default class Unstable3d extends SvelteComponent<Unstable3dProps, Unstable3dEvents, Unstable3dSlots> {
}
export {};
