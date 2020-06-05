export default ({ response }: { response: any }) => {
  response.status = 404;
  response.body = {
    msg:
      "Woah woah slow down buddy, you're looking for things that don't exist",
  };
};
