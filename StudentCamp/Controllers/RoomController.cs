﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using StudentCamp.Context;
using StudentCamp.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace StudentCamp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoomController : Controller
    {
        private CampContext campContext;
        public RoomController(CampContext cc)
        {
            campContext = cc;
        }

        // GET: RoomController
        [Route("room")]
        public IActionResult List()
        {
            // Pobieranie listy pokoi z bazy dancyh
            var rooms = campContext.Rooms.ToList();
            // Wysyłanie jej w postaci JSON do przeglądarki
            return Json(new { rooms = rooms });
        }

        // POST: RoomController/Create
        [HttpPost]
        //[ValidateAntiForgeryToken]
        [Route("room/create")]
        public IActionResult Create([FromBody]Room newRoom)
        {
            try
            {
                // Dodawanie to kontekstu bazy danych obiektu przesłanego w sekcji BODY
                campContext.Add(newRoom);
                // Zapisywanie stanu tymczasowego do bazy danych
                campContext.SaveChanges();
                // Odysłanie JSON do przeglądarki i informacją o sukcesie i obiektem dodanym do bazy
                return Json(new { succes = "Succes message", newRoom = newRoom }); ;
            }
            catch
            {
                // W razie niepowodzenia przy zapisie, wysyłanie informacji o błędzie
                return Json(new { error = "Erros" }); ;
            }
        }
    }
}
