import Button from "../Button";
import Input from "../Input";
import MiniCard from "../miniCard";
import Modal from "../modal";

export default function ModalEdit({ isOpen, closeModal, modalId }) {
    console.log( modalId)
    return (
        <>
           <Modal isOpen={isOpen} closeModal={closeModal}>
				<div>
					<h3 className="text-lg font-bold mb-4" >Edit Post</h3>
				</div>
				<div className="mb-8">
					<MiniCard className='!py-2 mb-3 hover:border-blue border-none'>
						<div className="flex justify-between items-start flex-row-reverse">
							<form >
								<Input type="text" name="post" />
								<Input type="file" name="image" />
								{/* <label>
									<p>Upload your image</p>
									<p>Drage and drop or browse to choose a file</p>
									<input className="hidden" type="file" />
								</label> */}
								<div className="flex gap-2 justify-between">
									<Button className="w-full bg-white border text-black">Cancel</Button>
									<Button className="w-full">Edit</Button>
								</div>
							</form>
						</div>
					</MiniCard>
				</div>
			</Modal>
        </>
    )
}
