import { Button } from "@/components/ui/button";
import Datatable from "./DataTable";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Add from "./add";

export const ItemsPage = () => {
  return (
    <div className="p-10 mb-20 w-full">
      <div>
        <div className="flex justify-between ">
          <div>
            <p>Items List</p>
            <p className=" text-xs">Manage your Supplier </p>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Add Items </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] mb-[30px]">
              <DialogHeader>
                <DialogTitle>Edit profile</DialogTitle>
                <DialogDescription>
                  Make changes to your profile here. Click save when you&aposre
                  done.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-[-80px]">
                <Add />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="p-2 mt-10 rounded-2xl">
        <Datatable />
      </div>
    </div>
  );
};
export default ItemsPage;

