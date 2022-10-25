import { PieceType } from "../logic/constants";
import Modal from "../logic/modal";

export default class PromotionModal extends Modal {
    constructor() {
        super("Előléptetés");
        this.content = `
        <div style="display: flex; flex-direction: row; gap: 5px">
            <div id="g-promotion-q" class="g-promotion-button">
                <img src="assets/pieces/wq.png" />
            </div>
            <div id="g-promotion-r" class="g-promotion-button">
                <img src="assets/pieces/wr.png" />
            </div>
            <div id="g-promotion-b" class="g-promotion-button">
                <img src="assets/pieces/wb.png" />
            </div>
            <div id="g-promotion-n" class="g-promotion-button">
                <img src="assets/pieces/wn.png" />
            </div>
        </div>
        `;
    }

    Bind(onSelected: (type: PieceType) => void) {
        document.getElementById("g-promotion-q")!.onclick = () => {
            super.DestroyModal();
            onSelected(PieceType.QUEEN);
        };
        document.getElementById("g-promotion-r")!.onclick = () => {
            super.DestroyModal();
            onSelected(PieceType.ROOK);
        };
        document.getElementById("g-promotion-b")!.onclick = () => {
            super.DestroyModal();
            onSelected(PieceType.BISHOP);
        };
        document.getElementById("g-promotion-n")!.onclick = () => {
            super.DestroyModal();
            onSelected(PieceType.KNIGHT);
        };
    }
}