const {ccclass, property} = cc._decorator;

@ccclass
export default class LHZMJ_TipMsg extends cc.Component {

    @property(cc.Label)
    lb_tip:cc.Label=null;


    onLoad() {
        // init logic
        //this.node.active=false;
    }
    /**
     * 初始化
     */
    public Init():void{
        this.node.active=false;
    }

    /**
     * 显示tip
     * */
    public showTip(tip:string,autoHide:boolean=true,waitTimer: number = 4):void{

         this.unschedule(this.hideAndDestory);
        this.lb_tip.string = tip;
        
        this.node.active=true;
        
        if(autoHide){
            this.scheduleOnce(this.hideAndDestory,waitTimer);//waitTimer秒之后隐藏并销毁
        }
        else{
            this.node.active=true;
        }
    }


    private hideAndDestory():void{
        this.node.active=false;
        this.node.destroy();
    }

    /**
     * 将毫秒转换为秒
     * @param haomiao 
     */
    private haoMiaoToMiao(haomiao:number):number{
        return haomiao/1000;
    }



}
