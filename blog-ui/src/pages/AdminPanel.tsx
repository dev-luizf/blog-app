import PostsList from "../components/PostsTable";
import getAllPosts from "../services/get/getAllPosts";
import { Post } from "../interfaces/services";
import { useEffect, useState } from "react";
import { useToast } from "../hooks/useToast";
import getMyPosts from "../services/get/getMyPosts";
import ModalNewPost from "../components/ModalNewPost";

function AdminPanel() {
  const [posts, setPosts] = useState<Post[]>([]);
  const { toast } = useToast();

  const fetchAllPosts = async () => {
    try {
      const { data } = await getAllPosts();
      setPosts(data);
    } catch (error: any) {
      toast.error(error?.response?.data?.message, {
        toastId: "error",
      });
    }
  };

  const fetchMyPosts = async () => {
    try {
      const { data } = await getMyPosts();
      setPosts(data);
    } catch (error: any) {
      toast.error(error?.response?.data?.message, {
        toastId: "error",
      });
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  return (
    <>
      <section className="container px-4 mx-auto">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-x-3 mt-10">
              <h2 className="text-lg font-medium text-white">Admin Panel</h2>
            </div>

            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">
              Check out the last posts of the blog..
            </p>
          </div>

          <ModalNewPost />
        </div>

        <div className="mt-6 md:flex md:items-center md:justify-between">
          <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
            <button
              onClick={fetchAllPosts}
              className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              All posts
            </button>

            <button
              onClick={fetchMyPosts}
              className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
            >
              My posts
            </button>
          </div>
        </div>

        <PostsList posts={posts} />
      </section>
    </>
  );
}

export default AdminPanel;
