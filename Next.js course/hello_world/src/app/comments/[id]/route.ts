import { redirect } from "next/navigation";
import { comments } from "../data";

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  
  if(parseInt(params.id)>comments.length){
    redirect("/comments")
  }
  const comment = comments.find((comment) => comment.id === parseInt(params.id));

  if (comment) {
    return new Response(JSON.stringify(comment), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } else {
    return new Response(JSON.stringify({ error: "Comment not found" }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}

/// this is the PATCH request 
export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const body = await request.json();
    const { text } = body;
  
    // Find the index of the comment
    const index = comments.findIndex((comment) => comment.id === parseInt(params.id));
  
    // Check if comment with the given ID exists
    if (index === -1) {
      return new Response(JSON.stringify({ error: "Comment not found" }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  
    // Update the comment text
    comments[index].text = text;
  
    // Return the updated comment
    return new Response(JSON.stringify(comments[index]), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  


  export async function DELETE(request: Request,
    { params }: { params: { id: string } })
    
    {

        const index = comments.findIndex((comment) => comment.id === parseInt(params.id));

        const deleteComment=comments[index]
        comments.splice(index, 1);
        return Response.json(deleteComment)
  }