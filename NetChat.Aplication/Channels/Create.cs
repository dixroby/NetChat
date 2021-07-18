using MediatR;
using Microsoft.EntityFrameworkCore;
using NetChat.Domain;
using NetChat.Persistence;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;

namespace NetChat.Aplication
{
    public class Create
    {
        public class Command : IRequest
        {
            public Guid ChannelId { get; set; }
            public string Name { get; set; }
            public string Description { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private DataContext _context;
            public Handler(DataContext dataContext)
            {
                _context = dataContext ?? throw new ArgumentNullException();
            }
            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var channel = new Channel
                {
                    ChannelId = request.ChannelId,
                    Name = request.Name,
                    Description = request.Description
                };
                await _context.Channels.AddAsync(channel);
                var succes =  await _context.SaveChangesAsync() > 0;
                if (succes)
                    return Unit.Value;
                throw new Exception("error al guardar");
            }
        }
    }
}