import { BiJi } from "../GameHelp/BJ_IBiJiClass";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SkinChatBox extends cc.Component {

    /**
     * 聊天框背景
     */
    @property(cc.Sprite)
    private img_chat: cc.Sprite=null;
    /**
     * 聊天框文本
     */
    @property(cc.Label)
    private label_chat: cc.Label=null;

    onLoad() {
        this.node.active = false;
    }
    public SetChair(chair: number) {
        switch (chair) {
            case 0: {
                this.node.x = -592;
                this.node.y = -247;
                break;
            }
            case 1: {
                this.node.x = 581;
                this.node.y = 5;
                this.label_chat.node.x = 0;
                break;
            }
            case 2: {
                this.node.x = 410;
                this.node.y = 260;
                this.label_chat.node.x = 0;
                break;
            }
            // case 3: {
            //     this.node.x = 0;
            //     this.node.y = 292;
            //     break;
            // }
            case 3: {
                this.node.x = -470;
                this.node.y = 260;
                break;
            }
            case 4: {
                this.node.x = -581;
                this.node.y = 5;
                break;
            }
        }
        if (chair == 0) {
            this.node.x += 236;
            this.node.y += 0;
        }
        else if (chair == 1 || chair == 2) {
            this.node.x += -178;
            this.node.y += 0;
        }
        else if (chair == 3) {
            this.node.x += 236;
            this.node.y += -27;
        }
        else if (chair == 4 || chair == 5) {
            this.node.x += 178;
            this.node.y += 0;
        }

        if (chair == 1 || chair == 2) {
            this.img_chat.node.scaleX = -1;
        }
        else {
            this.img_chat.node.scaleX = 1;
        }
    }
    public Init() {
        this.Destroy();
        this.node.active = false;
    }
    public Destroy() {
        this.unscheduleAllCallbacks();
    }
    /**
     * 显示聊天框
     */
    public ShowChat(value: string) {
        this.unscheduleAllCallbacks();
        this.node.active = true;
        this.label_chat.string = value;
        this.scheduleOnce(this.AniOver, 3.5 * BiJi.ins.iclass.GetSpeed());
    }
    private AniOver() {
        this.node.active = false;
    }
}
