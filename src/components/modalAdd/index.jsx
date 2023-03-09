import Button from "../Button";
import Input from "../Input";
import MiniCard from "../miniCard";
import Modal from "../modal";

export default function modalAdd({isOpen, closeModal ,modalId}) {
    console.log( modalId)
    return (
        <Modal isOpen={isOpen} closeModal={closeModal}>
            <div>
                <h3 className="text-lg font-bold mb-4" >Add Post</h3>
            </div>
            <div className="mb-8">
                <MiniCard className='!py-2 mb-3 hover:border-blue border-none'>
                    <div className="flex justify-between items-start flex-row-reverse">
                        <form >
                            <Input type="text" name="post" />
                            <Input type="file" name="imaget" />
                            <div className="flex gap-2 justify-between">
                                <Button className="w-full bg-white border text-black">Cancel</Button>
                                <Button className="w-full">Add</Button>
                            </div>
                        </form>
                    </div>
                </MiniCard>
            </div>
        </Modal>
    )
}
