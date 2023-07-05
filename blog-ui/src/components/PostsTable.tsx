import { FaUserCircle } from "react-icons/fa";
import { BsNewspaper } from "react-icons/bs";
import { Post } from "../interfaces/services";
import { formatDate } from "../utils/formatDate";
import ModalDeletePost from "./ModalDeletePost";
import ModalNewPost from "./ModalNewPost";
import ModalEditPost from "./ModalEditPost";
import ModalViewPost from "./MoldaViewPost";

interface PostsListProps {
  posts: Post[];
}

function PostsTable({ posts }: PostsListProps) {
  if (posts.length === 0) {
    return (
      <div className="flex items-center mt-6 text-center border rounded-lg h-96 dark:border-gray-700">
        <div className="flex flex-col w-full max-w-sm px-4 mx-auto">
          <div className="p-3 mx-auto text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800">
            <BsNewspaper size="2rem" />
          </div>
          <h1 className="text-lg text-gray-800 dark:text-white">
            No posts found
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            There is no posts in the blog, write somenthing new!
          </p>
          <ModalNewPost />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <div className="flex items-center gap-x-3">
                        <span>Title</span>
                      </div>
                    </th>

                    <th
                      scope="col"
                      className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      <span>Author</span>
                    </th>

                    <th
                      scope="col"
                      className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400"
                    >
                      Publish date
                    </th>

                    <th scope="col" className="relative py-3.5 px-4">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                  {posts.map((post) => (
                      <tr>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {post.title}
                      </td>
                      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div className="inline-flex items-center gap-x-3">
                          <div className="flex items-center gap-x-2">
                            <FaUserCircle size="2em" />
                            <div>
                              <h2 className="font-medium text-gray-800 dark:text-white ">
                                {post.author}
                              </h2>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                        {formatDate(post.createdAt)}
                      </td>
                      <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div className="flex items-center gap-x-6">
                          <ModalViewPost post={post}/>
                          <ModalEditPost post={post} />
                          <ModalDeletePost id={post.id} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostsTable;
