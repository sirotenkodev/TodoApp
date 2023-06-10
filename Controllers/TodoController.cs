using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApp.Models;

namespace TodoApp.Controllers
{
    [ApiController]
    [Route("api/todos")]
    public class TodoController : Controller
    {
        ApplicationContext db;
        public TodoController(ApplicationContext context)
        {
            db = context;
        }

        [HttpGet]
        public IEnumerable<Todo> Get()
        {
            return db.Todos.ToList();
        }

        [HttpGet("{id}")]
        public Todo Get(int id)
        {
            Todo product = db.Todos.FirstOrDefault(x => x.ID == id);
            return product;
        }

        [HttpPost]
        public IActionResult Post(Todo todo)
        {
            DateTime now = DateTime.Now;
            
            if (ModelState.IsValid)
            {
                todo.TaskDescription = now.ToString();
                db.Todos.Add(todo);
                db.SaveChanges();
                return Ok(todo);
            }
            return BadRequest(ModelState);
        }

        [HttpPut]
        public IActionResult Put(Todo todo)
        {
            DateTime now = DateTime.Now;

            if (ModelState.IsValid)
            {
                todo.TaskDescription = now.ToString();
                db.Update(todo);
                db.SaveChanges();
                return Ok(todo);
            }
            return BadRequest(ModelState);
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Todo product = db.Todos.FirstOrDefault(x => x.ID == id);
            if (product != null)
            {
                db.Todos.Remove(product);
                db.SaveChanges();
            }
            return Ok(product);
        }
    }
}
