import React from "react";
import Image from "next/image";
import Link from "next/link";
import contactImg from "../public/assets/contact.svg";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsInstagram, BsPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
	return (
		<div id="contact" className="w-full lg:h-screen">
			<div className="max-w-[1240px] m-auto px-2 py-16 w-full">
				<p className="text-xl uppercase tracking-widest text-[#1E90FF]">
					Contact
				</p>
				<h2 className="py-4">Get In Touch</h2>
				<div className="grid lg:grid-cols-5 gap-8">
					{/* left */}

					<div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
						<div className="lg:p-4 h-full">
							<div>
								<Image
									className="rounded-xl hover:scale-105 ease-in duration-300"
									src={contactImg}
									alt="/"
								/>
							</div>
							<div>
								<h2 className="py-2">Yoga Ardika Pradana</h2>
								<p>Full-Stack Developer</p>
								<p className="py-4">
									Feel free to reach out if you&apos;re looking for a developer,
									have a question, or just want to connect.
								</p>
							</div>
							<div>
								<p className="uppercase pt-8">Connect With Me</p>
								<div className="flex items-center justify-between py-4">
									<a
										href="https://www.linkedin.com/in/agooy/"
										target="_blank"
										rel="noreferrer"
									>
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
											<FaLinkedinIn />
										</div>
									</a>
									<a
										href="https://github.com/Agoooy/"
										target="_blank"
										rel="noreferrer"
									>
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
											<FaGithub />
										</div>
									</a>
									<a
										href="https://www.instagram.com/yogardkaa/"
										target="_blank"
										rel="noreferrer"
									>
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
											<BsInstagram />
										</div>
									</a>
									<a target="_blank" href="/resume.pdf">
										<div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
											<BsPersonLinesFill />
										</div>
									</a>
								</div>
							</div>
						</div>
					</div>
					{/* right */}

					<div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
						<div className="p-4">
							<form
								action="https://getform.io/f/6c07bc88-5f8a-4485-b9c4-c32ec6721b84"
								method="POST"
								encType="multipart/form-data"
							>
								<div className="grid grid-cols-2 gap-4 w-full py-2">
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2">Name</label>
										<input
											type="text"
											className="border-2 rounded-lg  p-3 flex border-gray-300"
											name="name"
										/>
									</div>
									<div className="flex flex-col">
										<label className="uppercase text-sm py-2">
											Phone Number
										</label>
										<input
											type="text"
											className="border-2 rounded-lg p-3 flex border-gray-300"
											name="phone"
										/>
									</div>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">Email</label>
									<input
										type="email"
										className="border-2 rounded-lg p-3 flex border-gray-300"
										name="email"
									/>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">Subject</label>
									<input
										type="text"
										className="border-2 rounded-lg p-3 flex border-gray-300"
										name="subject"
									/>
								</div>
								<div className="flex flex-col py-2">
									<label className="uppercase text-sm py-2">Message</label>
									<textarea
										className="border-2 rounded-lg p-3 border-gray-300"
										rows="10"
										name="message"
									></textarea>
								</div>
								<button
									data-mdb-ripple="true"
									data-mdb-ripple-color="light"
									className="w-full p-4 text-gray-100 mt-4"
								>
									Send Message
								</button>
							</form>
						</div>
					</div>
				</div>
				<div className="flex justify-center py-12">
					<Link href="/">
						<div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
							<HiOutlineChevronDoubleUp className="text-[#1E90FF]" size={30} />
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Contact;
