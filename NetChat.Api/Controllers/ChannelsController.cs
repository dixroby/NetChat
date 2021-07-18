using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using NetChat.Aplication;
using NetChat.Domain;
using NetChat.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NetChat.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ChannelsController : ControllerBase
    {
        private IMediator _mediator;
        public ChannelsController(IMediator mediator)
        {
            _mediator = mediator ?? throw new ArgumentNullException(nameof(mediator));
        }
        
        [HttpGet]
        public async Task<ActionResult<List<Channel>>> List()
        {
            var result = await _mediator.Send(new List.Query());

            return result;
        }

        [HttpGet("ChannelId")]
        public async Task<ActionResult<Channel>> Details(Guid ChannelId)
        {
            var result = await _mediator.Send(new Details.Query {ChannelId= ChannelId });

            return result;
        }

        [HttpPost]
        public async Task<Unit> Create([FromBody] Create.Command command)
        {
            var result = await _mediator.Send(command);
            return result;
        }

        //private static readonly string[] Summaries = new[]
        //{
        //    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
        //};
        //[HttpGet]
        //public IEnumerable<WeatherForecast> GetIEnumerable()
        //{
        //    var rng = new Random();
        //    return Enumerable.Range(1, 5).Select(index => new WeatherForecast
        //    {
        //        Date = DateTime.Now.AddDays(index),
        //        TemperatureC = rng.Next(-20, 55),
        //        Summary = Summaries[rng.Next(Summaries.Length)]
        //    })
        //    .ToArray();
        //}
    }
}
