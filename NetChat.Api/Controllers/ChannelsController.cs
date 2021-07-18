using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
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
        private DataContext _context;
        private ILogger<ChannelsController> _logger;

        public ChannelsController(DataContext context, ILogger<ChannelsController> logger)
        {
            _context = context ?? throw new ArgumentNullException(nameof(context));
            _logger = logger ?? throw new ArgumentNullException(nameof(context));
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            Task<IEnumerable<Domain.Channel>> channelTask = GetChannels();

            _logger.LogInformation("Siguiente la tarea");

            var channels = await channelTask;
            _logger.LogInformation("Termino la tarea");

            return Ok(channels);
        }
        [HttpGet]
        private async Task<IEnumerable<Domain.Channel>> GetChannels()
        {
            var channels = await _context.Channels.ToListAsync();
            return channels;
        }

        [HttpGet("{id}")]
        public IActionResult Get(Guid id)
        {
            var channel = _context.Channels.FirstOrDefault(x => x.ChannelId == id);
            return Ok(channel);
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
