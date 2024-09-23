export const dynamic="force-dynamic"   ///in the npm run build the route handler is not update in every refersh it store in the casha that why we used "force-dynamic"

export async function GET(){
    return Response.json({
        time:new Date().toLocaleTimeString(),
    }

    )
}