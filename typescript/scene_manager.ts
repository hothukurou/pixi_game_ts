import * as PIXI from "pixi.js";
//　シーンの変化を管理するクラス

export class SceneManager
{
    private gameLoops = []; // 毎フレーム毎に実行する関数たち
    private app: PIXI.Application;
    constructor(app: PIXI.Application)
    {
        this.app = app;
    }

    /**
 * 毎フレーム処理を追加する関数
 */
    addGameLoop(gameLoopFunction)
    {
        this.app.ticker.add(gameLoopFunction); // 毎フレーム処理として指定した関数を追加
        this.gameLoops.push(gameLoopFunction); // 追加した関数は配列に保存する（後で登録を解除する時に使う）
    }

    /**
     * 登録している毎フレーム処理を全部削除する関数
     */
    removeAllGameLoops()
    {
        // gameLoopsに追加した関数を全部tickerから解除する
        for (const gameLoop of this.gameLoops)
        {
            this.app.ticker.remove(gameLoop);
        }
        this.gameLoops = []; // gameLoopsを空にする
    }
    /**
     * 全てのシーンを画面から取り除く関数
     */
    removeAllScene()
    {
        // 既存のシーンを全部削除する
        for (const scene of this.app.stage.children)
        {
            this.app.stage.removeChild(scene);
        }
    }
}