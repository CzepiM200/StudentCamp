using Microsoft.AspNetCore.Mvc;
using StudentCamp.Context;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StudentCamp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PaymentController : ControllerBase
    {
        private CampContext campContext;
        PaymentController(CampContext cc)
        {
            campContext = cc;
        }

    }
}
