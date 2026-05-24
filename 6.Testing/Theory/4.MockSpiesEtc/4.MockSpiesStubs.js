// end goal of using mock, spy, stub is same.


/**
 * OrderService -> place order 
 * 
 * // IMPURE FUNCTION 
 * async placeOrder(userId, items) {
 *  // const user = await UserService.getUserById(userId); // DB/HTTP
 *  // const items = await ItemService.getItemsByIds(items); // HTTP 

 *  // const order = await OrderService.createOrder(userId, items); // HTTP 

    // DB call save the order 
    // await db.save(order); // 

    send email to the user  
    await emailService.sendEmail(user.email, 'Order placed', 'Your order has been placed'); // HTTP 
 * 
 *  return order;
 * }
 * 
 * 
 */


//    2. Mock / Stub / Spy - SAME FAMILY, different jobs
/**
 * Mock -> fake implementation of the function jest.mock("module")
 * Stub -> jest.stub(module, "functionName").mockReturnValue(value)
 * Spy -> jest.spyOn(module, "functionName")
 * 
 */