export const scenario_modern_memorykeeper_76_01 = {
	"scenario_id": "modern_memorykeeper_76_01",
	"order": 1,
	"act": "intro",
	"theme": "modern",
	"actors": {
		"lin": {
			"id": "mon_d036a884-3dde-472c-9fe7-c4807643860f",
			"name": {
				"korean": "린",
				"english": "Lin",
				"japanese": "リン",
				"chinese": "琳",
				"french": "Lin",
				"spanish": "Lin",
				"vietnamese": "Lin",
				"thai": "ลิน",
				"hindi": "लिन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/a095dd66-1857-4f44-68b0-2ece83006d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/05b02694-f1ed-4e4c-b7ca-fb5b74a48900/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "오래된 기억 속 한 장면. 모든 것이 평화로웠다.",
						"english": "A scene from an old memory. Everything was peaceful.",
						"japanese": "古い記憶の一場面。全てが平和だった。",
						"chinese": "旧日记忆中的一幕。万物祥和。",
						"french": "Une scène d'un vieux souvenir. Tout était paisible.",
						"spanish": "Una escena de un viejo recuerdo. Todo estaba en paz.",
						"vietnamese": "Một cảnh trong ký ức xưa. Mọi thứ thật yên bình.",
						"thai": "ฉากหนึ่งจากความทรงจำเก่า ทุกสิ่งสงบสุข",
						"hindi": "पुरानी यादों का एक दृश्य। सब कुछ शांत था।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				},
				{
					"duration_ms": 500,
					"spot": [
						4,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "왔구나! 기다렸어.",
						"english": "You're here! I've been waiting.",
						"japanese": "来たね！待っていたよ。",
						"chinese": "你来了！我等你很久了。",
						"french": "Tu es là ! Je t'attendais.",
						"spanish": "¡Has llegado! Te estaba esperando.",
						"vietnamese": "Cậu đến rồi! Tớ đã đợi.",
						"thai": "มาแล้วสินะ! ฉันรออยู่เลย",
						"hindi": "तुम आ गए! मैं इंतज़ार कर रहा था।"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "린? 여기가… 대체 어디지?",
						"english": "Lynn? Where... where exactly am I?",
						"japanese": "リン？ここって…一体どこなの？",
						"chinese": "琳？这里…到底是哪里？",
						"french": "Lynn ? Où… où suis-je exactement ?",
						"spanish": "¿Lynn? ¿Dónde… dónde estoy exactamente?",
						"vietnamese": "Lynn? Đây… rốt cuộc là đâu vậy?",
						"thai": "ลินน์? ที่นี่มัน… ที่ไหนกันแน่?",
						"hindi": "लिन? यह जगह… आख़िर कहाँ है?"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "모든 것이 완벽한 곳. 네가 바라던 그곳이야.",
						"english": "A place where everything is perfect. The place you wished for.",
						"japanese": "全てが完璧な場所。君が望んだ場所だよ。",
						"chinese": "万物完美之地。就是你所期盼的地方。",
						"french": "Un endroit où tout est parfait. L'endroit que tu désirais.",
						"spanish": "Un lugar donde todo es perfecto. El lugar que deseabas.",
						"vietnamese": "Nơi mọi thứ đều hoàn hảo. Là nơi cậu hằng mong ước.",
						"thai": "ที่ที่ทุกสิ่งสมบูรณ์แบบ ที่ที่เธอปรารถนาไง",
						"hindi": "वह जगह जहाँ सब कुछ सही है। वही जगह जिसकी तुम्हें चाहत थी।"
					},
					"emotion": "happy"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						2,
						3
					],
					"action": "enter",
					"type": "direction",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "여기 봐. 꽃들이 예전 그대로야.",
						"english": "Look here. The flowers are just as they were.",
						"japanese": "ここを見て。花々が昔のままだよ。",
						"chinese": "你看这里。花儿们和以前一样。",
						"french": "Regarde ici. Les fleurs sont exactement comme avant.",
						"spanish": "Mira aquí. Las flores están igual que antes.",
						"vietnamese": "Nhìn đây. Hoa vẫn như xưa.",
						"thai": "ดูนี่สิ. ดอกไม้ยังคงเหมือนเดิม",
						"hindi": "यहाँ देखो। फूल पहले जैसे ही हैं।"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "이상해… 뭔가 익숙한데 낯설어.",
						"english": "Strange... It feels familiar, yet unfamiliar.",
						"japanese": "変だ…なんだか見覚えがあるのに、見慣れない。",
						"chinese": "奇怪……感觉熟悉又陌生。",
						"french": "Bizarre... C'est familier et étranger à la fois.",
						"spanish": "Extraño... Me resulta familiar, pero desconocido.",
						"vietnamese": "Kỳ lạ... Vừa quen thuộc, vừa xa lạ.",
						"thai": "แปลกจัง... เหมือนจะคุ้นเคย แต่ก็ไม่คุ้นเลย",
						"hindi": "अजीब है... कुछ जाना-पहचाना सा है, फिर भी अनजान सा लग रहा है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"content": {
						"korean": "낡은 손수건이 길가에 떨어져 있었다. 방금 놓인 것처럼.",
						"english": "An old handkerchief lay on the roadside. As if just placed there.",
						"japanese": "古いハンカチが道端に落ちていた。まるで今置かれたかのように。",
						"chinese": "一块旧手帕掉在路边。仿佛刚放下的。",
						"french": "Un vieux mouchoir était tombé sur le bord de la route. Comme s'il venait d'être posé.",
						"spanish": "Un pañuelo viejo yacía en el camino. Como si acabara de ser puesto.",
						"vietnamese": "Một chiếc khăn tay cũ nằm trên vệ đường. Cứ như vừa mới đặt xuống.",
						"thai": "ผ้าเช็ดหน้าเก่าๆ ตกอยู่ข้างทาง ราวกับเพิ่งถูกวางไว้",
						"hindi": "एक पुराना रुमाल सड़क किनारे पड़ा था। मानो अभी-अभी रखा गया हो।"
					},
					"emotion": "base",
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"content": {
						"korean": "무슨 소리야? 모든 게 다 제자리에 있어.",
						"english": "What are you talking about? Everything's in its place.",
						"japanese": "何を言ってるの？全部元の場所にあるわ。",
						"chinese": "你说什么呢？一切都好好的。",
						"french": "De quoi tu parles ? Tout est à sa place.",
						"spanish": "¿De qué hablas? Todo está en su sitio.",
						"vietnamese": "Bạn đang nói gì vậy? Mọi thứ vẫn ở đúng chỗ mà.",
						"thai": "พูดอะไรน่ะ? ทุกอย่างก็อยู่กับที่นี่นา",
						"hindi": "क्या बकवास कर रहे हो? सब कुछ अपनी जगह पर है।"
					},
					"emotion": "base",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"content": {
						"korean": "그럴 리가….",
						"english": "That can't be...",
						"japanese": "そんなはずは…",
						"chinese": "不可能……",
						"french": "Impossible...",
						"spanish": "Imposible...",
						"vietnamese": "Không thể nào...",
						"thai": "ไม่จริงน่า...",
						"hindi": "ऐसा हो ही नहीं सकता..."
					},
					"emotion": "sad",
					"type": "speech",
					"speaker": "character_any"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						3,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "lin"
				},
				{
					"type": "speech",
					"speaker": "lin",
					"content": {
						"korean": "우리, 그때처럼 같이 놀자.",
						"english": "Let's play together, just like old times.",
						"japanese": "あの時のように、一緒に遊ぼうよ。",
						"chinese": "我们像那时一样，一起玩吧。",
						"french": "Jouons ensemble, comme avant.",
						"spanish": "Juguemos juntos, como aquella vez.",
						"vietnamese": "Chúng ta hãy chơi cùng nhau, như hồi đó.",
						"thai": "มาเล่นด้วยกันเหมือนตอนนั้นเถอะ",
						"hindi": "चलो, उस समय की तरह साथ खेलते हैं।"
					},
					"emotion": "happy"
				},
				{
					"content": {
						"korean": "계속 같은 말을 하는 것 같아.",
						"english": "You keep saying the same thing.",
						"japanese": "ずっと同じことばかり言ってるみたい。",
						"chinese": "你好像一直在说同样的话。",
						"french": "Tu répètes toujours la même chose.",
						"spanish": "Parece que sigues diciendo lo mismo.",
						"vietnamese": "Cậu cứ nói mãi một điều.",
						"thai": "เหมือนเธอพูดแต่เรื่องเดิมๆ",
						"hindi": "लगता है तुम एक ही बात बार-बार कह रहे हो।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "응? 무슨 소리야. 네가 이상해진 거 아니야?",
						"english": "Huh? What are you talking about? Aren't *you* the one who's acting strange?",
						"japanese": "え？何言ってるの。おかしくなったのは君じゃない？",
						"chinese": "嗯？你说什么呢。不是你变得奇怪了吗？",
						"french": "Hein ? De quoi tu parles ? C'est toi qui es étrange, non ?",
						"spanish": "¿Eh? ¿De qué hablas? ¿No serás tú quien se ha vuelto extraño?",
						"vietnamese": "Hả? Cậu nói gì vậy? Không phải cậu mới là người kỳ lạ sao?",
						"thai": "หือ? พูดอะไรน่ะ? เธอต่างหากที่แปลกไปไม่ใช่เหรอ?",
						"hindi": "हाँ? क्या कह रहे हो? तुम अजीब नहीं हो गए हो क्या?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "여긴 진짜가 아니야.",
						"english": "This isn't real.",
						"japanese": "ここは本物じゃない。",
						"chinese": "这里不是真的。",
						"french": "Ce n'est pas la réalité ici.",
						"spanish": "Esto no es real.",
						"vietnamese": "Đây không phải là thật.",
						"thai": "ที่นี่ไม่ใช่ของจริง",
						"hindi": "यह असली नहीं है।"
					},
					"emotion": "angry"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "그럴 리 없어. 여기가 진짜야.",
						"english": "That's impossible. This is real.",
						"japanese": "そんなはずない。ここが本当なのよ。",
						"chinese": "不可能。这里才是真的。",
						"french": "Impossible. C'est ça la réalité.",
						"spanish": "Eso no es posible. Esto es real.",
						"vietnamese": "Không thể nào. Đây mới là thật.",
						"thai": "ไม่จริงหรอก ที่นี่แหละของจริง",
						"hindi": "ऐसा हो ही नहीं सकता। यही असली है।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"spot": [
						4,
						2
					],
					"action": "enter",
					"type": "direction",
					"speaker": "lin"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "왜 자꾸 의심해? 모든 게 평화로운데.",
						"english": "Why do you keep doubting? Everything's peaceful.",
						"japanese": "なんで疑うの？すべてが平和なのに。",
						"chinese": "你为什么总是怀疑？一切都很平静啊。",
						"french": "Pourquoi doutes-tu sans cesse ? Tout est si paisible.",
						"spanish": "¿Por qué sigues dudando? Todo está en paz.",
						"vietnamese": "Sao cậu cứ nghi ngờ mãi thế? Mọi thứ đều bình yên mà.",
						"thai": "ทำไมถึงคอยสงสัยอยู่เรื่อย? ทุกอย่างก็สงบดีนี่นา",
						"hindi": "तुम बार-बार शक क्यों कर रहे हो? सब कुछ शांतिपूर्ण है।"
					},
					"emotion": "sad"
				},
				{
					"content": {
						"korean": "너무 평화로워서, 숨이 막혀.",
						"english": "It's so peaceful, it's suffocating.",
						"japanese": "あまりに平和で、息が詰まるわ。",
						"chinese": "如此平静，令人窒息。",
						"french": "C'est si paisible que j'en suffoque.",
						"spanish": "Es tan pacífico que me asfixia.",
						"vietnamese": "Bình yên đến ngạt thở.",
						"thai": "สงบสุขจนแทบหยุดหายใจ",
						"hindi": "इतनी शांति है कि दम घुट रहा है।"
					},
					"emotion": "base",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "아니야. 여기가 너의 영원한 안식처야.",
						"english": "No. This is your eternal resting place.",
						"japanese": "違う。ここがお前の永遠の安息の地だ。",
						"chinese": "不。这里是你的永恒安息之地。",
						"french": "Non. C'est ton repos éternel.",
						"spanish": "No. Este es tu eterno reposo.",
						"vietnamese": "Không. Đây là nơi an nghỉ vĩnh hằng của ngươi.",
						"thai": "ไม่ใช่ ที่นี่คือที่พักผ่อนชั่วนิรันดร์ของเจ้า",
						"hindi": "नहीं। यही तुम्हारा शाश्वत विश्राम स्थल है।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "난 여기에 갇힐 수 없어.",
						"english": "I can't be trapped here.",
						"japanese": "私はここに閉じ込められない。",
						"chinese": "我不能被困在这里。",
						"french": "Je ne peux pas être piégé(e) ici.",
						"spanish": "No puedo estar atrapado(a) aquí.",
						"vietnamese": "Tôi không thể bị mắc kẹt ở đây.",
						"thai": "ข้าจะถูกขังอยู่ที่นี่ไม่ได้",
						"hindi": "मैं यहाँ फँस नहीं सकता।"
					},
					"emotion": "angry",
					"type": "speech",
					"speaker": "character_any"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "어딜 가려고? 여기보다 완벽한 곳은 없어.",
						"english": "Where are you going? There's no place more perfect than this.",
						"japanese": "どこへ行くの？ここより完璧な場所はないわ。",
						"chinese": "你要去哪里？没有比这里更完美的地方了。",
						"french": "Où vas-tu ? Il n'y a pas d'endroit plus parfait qu'ici.",
						"spanish": "¿A dónde vas? No hay lugar más perfecto que este.",
						"vietnamese": "Ngươi muốn đi đâu? Không có nơi nào hoàn hảo hơn nơi này.",
						"thai": "จะไปไหน? ไม่มีที่ไหนสมบูรณ์แบบไปกว่าที่นี่แล้ว",
						"hindi": "कहाँ जा रहे हो? इससे बेहतर जगह कहीं नहीं।"
					},
					"emotion": "sad"
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "결국… 기억은 부서지는군. 다음은 더 잔혹할 것이다.",
						"english": "Ultimately... memories shatter. The next will be even crueler.",
						"japanese": "結局…記憶は砕け散る。次はもっと残酷だろう。",
						"chinese": "终究……记忆会破碎。下一次会更加残酷。",
						"french": "Finalement... les souvenirs se brisent. La suite sera encore plus cruelle.",
						"spanish": "Al final... los recuerdos se rompen. Lo siguiente será aún más cruel.",
						"vietnamese": "Cuối cùng... ký ức cũng vỡ vụn. Lần tới sẽ tàn khốc hơn nhiều.",
						"thai": "ในที่สุด... ความทรงจำก็แตกสลาย ครั้งหน้าจะโหดร้ายกว่านี้อีก",
						"hindi": "अंततः... यादें बिखर जाती हैं। अगला और भी क्रूर होगा।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "진실을 마주할게.",
						"english": "I will face the truth.",
						"japanese": "真実と向き合う。",
						"chinese": "我将面对真相。",
						"french": "J'affronterai la vérité.",
						"spanish": "Me enfrentaré a la verdad.",
						"vietnamese": "Tôi sẽ đối mặt với sự thật.",
						"thai": "ฉันจะเผชิญหน้ากับความจริง",
						"hindi": "मैं सच का सामना करूँगा।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "달콤한 환영이 깨져나갔다. 이제, 고통스러운 진실과 마주할 시간이다.",
						"english": "The sweet illusion shattered. Now, it's time to face the painful truth.",
						"japanese": "甘い幻想は打ち砕かれた。今こそ、苦痛な真実と向き合う時だ。",
						"chinese": "甜蜜的幻象已破碎。现在，是时候面对痛苦的真相了。",
						"french": "La douce illusion s'est brisée. Il est temps d'affronter la douloureuse vérité.",
						"spanish": "La dulce ilusión se hizo añicos. Ahora es el momento de enfrentar la dolorosa verdad.",
						"vietnamese": "Ảo ảnh ngọt ngào đã tan vỡ. Giờ là lúc đối mặt với sự thật đau đớn.",
						"thai": "ภาพลวงตาอันหอมหวานได้แตกสลายไปแล้ว ถึงเวลาแล้วที่จะต้องเผชิญหน้ากับความจริงอันเจ็บปวด",
						"hindi": "मधुर भ्रम टूट गया। अब, दर्दनाक सच का सामना करने का समय है।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "narrator"
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "어리석은 자. 영원히 이 환영 속을 헤매라.",
						"english": "Fool. Wander in this illusion forever.",
						"japanese": "愚か者め。永遠にこの幻影を彷徨え。",
						"chinese": "愚者。永远在这幻象中徘徊吧。",
						"french": "Imbécile. Erre à jamais dans cette illusion.",
						"spanish": "Tonto. Deambula por esta ilusión para siempre.",
						"vietnamese": "Kẻ ngốc. Hãy mãi mãi lạc lối trong ảo ảnh này đi.",
						"thai": "เจ้าโง่ จงหลงทางในภาพลวงตานี้ตลอดไป",
						"hindi": "मूर्ख। इस भ्रम में हमेशा के लिए भटकता रह।"
					},
					"emotion": "base",
					"type": "speech",
					"speaker": "random_boss"
				},
				{
					"content": {
						"korean": "…아니. 난 포기하지 않아.",
						"english": "...No. I won't give up.",
						"japanese": "…いや。私は諦めない。",
						"chinese": "……不。我不会放弃。",
						"french": "...Non. Je n'abandonnerai pas.",
						"spanish": "...No. No me rendiré.",
						"vietnamese": "...Không. Tôi sẽ không bỏ cuộc đâu.",
						"thai": "...ไม่ ฉันจะไม่ยอมแพ้",
						"hindi": "...नहीं। मैं हार नहीं मानूँगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"action": "enter",
					"type": "direction",
					"speaker": "lin",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "제발… 나와 함께 있어줘….",
						"english": "Please... stay with me....",
						"japanese": "お願い… 私と一緒にいて…。",
						"chinese": "拜托……留在我身边……。",
						"french": "S'il te plaît... reste avec moi....",
						"spanish": "Por favor... quédate conmigo....",
						"vietnamese": "Làm ơn... hãy ở lại với tôi....",
						"thai": "ได้โปรด... อยู่กับฉันนะ...",
						"hindi": "कृपया… मेरे साथ रहो…।"
					},
					"emotion": "sad"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "여기까지 온 이유가 뭐지? 아름다운 환영을 깨려 하는가?",
						"english": "Why have you come this far? Do you intend to shatter this beautiful illusion?",
						"japanese": "ここまで来た理由は何だ？この美しい幻影を打ち破ろうとするのか？",
						"chinese": "你为何走到这里？是想打破这美丽的幻象吗？",
						"french": "Pourquoi es-tu venu si loin ? As-tu l'intention de briser cette belle illusion ?",
						"spanish": "¿Por qué has llegado tan lejos? ¿Pretendes romper esta hermosa ilusión?",
						"vietnamese": "Ngươi đến đây làm gì? Ngươi muốn phá vỡ ảo ảnh tuyệt đẹp này sao?",
						"thai": "เหตุใดจึงมาถึงที่นี่? เจ้าต้องการทำลายภาพลวงตาอันงดงามนี้หรือ?",
						"hindi": "यहाँ तक क्यों आए हो? क्या इस खूबसूरत भ्रम को तोड़ना चाहते हो?"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "lin",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						2,
						3
					]
				},
				{
					"content": {
						"korean": "응. 제발 더 이상 깨트리지 마. 다 완벽하잖아.",
						"english": "Yes. Please don't shatter it anymore. Everything is perfect, isn't it?",
						"japanese": "うん。どうかこれ以上壊さないで。全部完璧じゃないか。",
						"chinese": "是啊。求你别再打破了。一切都很完美不是吗？",
						"french": "Oui. S'il te plaît, ne le brise plus. Tout est parfait, n'est-ce pas ?",
						"spanish": "Sí. Por favor, no lo rompas más. Todo es perfecto, ¿no?",
						"vietnamese": "Đúng vậy. Làm ơn đừng phá vỡ nó nữa. Mọi thứ đều hoàn hảo mà.",
						"thai": "ใช่แล้ว ได้โปรดอย่าทำลายมันอีกเลย ทุกสิ่งสมบูรณ์แบบแล้วไม่ใช่หรือ?",
						"hindi": "हाँ। कृपया इसे और मत तोड़ो। सब कुछ सही है ना?"
					},
					"emotion": "sad",
					"speaker": "lin",
					"type": "speech"
				},
				{
					"content": {
						"korean": "이건 진짜가 아니야. 난 환상에 갇히지 않을 거야.",
						"english": "This isn't real. I won't be trapped in an illusion.",
						"japanese": "これは本当じゃない。私は幻想に囚われない。",
						"chinese": "这不是真的。我不会被困在幻象中。",
						"french": "Ce n'est pas réel. Je ne me laisserai pas piéger par une illusion.",
						"spanish": "Esto no es real. No me quedaré atrapado(a) en una ilusión.",
						"vietnamese": "Đây không phải là thật. Tôi sẽ không bị mắc kẹt trong ảo ảnh.",
						"thai": "นี่ไม่ใช่ของจริง ข้าจะไม่ถูกขังอยู่ในภาพลวงตา",
						"hindi": "यह असली नहीं है। मैं भ्रम में नहीं फँसूंगा।"
					},
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "후회할 거다. 진실은 고통스러울 뿐.",
						"english": "You'll regret it. The truth is only painful.",
						"japanese": "後悔するだろう。真実は苦痛なだけだ。",
						"chinese": "你会后悔的。真相只会带来痛苦。",
						"french": "Tu le regretteras. La vérité n'est que douleur.",
						"spanish": "Te arrepentirás. La verdad solo trae dolor.",
						"vietnamese": "Ngươi sẽ hối hận đấy. Sự thật chỉ mang lại đau khổ mà thôi.",
						"thai": "เจ้าจะต้องเสียใจ ความจริงมีแต่จะเจ็บปวดเท่านั้น",
						"hindi": "तुम्हें पछताना पड़ेगा। सच केवल दर्दनाक होता है।"
					},
					"emotion": "base"
				},
				{
					"speaker": "lin",
					"type": "speech",
					"content": {
						"korean": "가지 마….",
						"english": "Don't go...",
						"japanese": "行かないで…。",
						"chinese": "别走……",
						"french": "Ne pars pas...",
						"spanish": "No te vayas...",
						"vietnamese": "Đừng đi...",
						"thai": "อย่าไปเลย...",
						"hindi": "मत जाओ..."
					},
					"emotion": "sad"
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"세계수가 부르는 곳, 그곳은 과거였다.",
			"모든 것이 따뜻하고 완벽했던 시절.",
			"잊었던 친구가 반기고, 익숙한 풍경이 펼쳐진다.",
			"그러나—너무 완벽해서 오히려 불안하다.",
			"이 달콤한 환영은 누구의 기억인가?"
		],
		"english": [
			"Where the World Tree calls, that was the past.",
			"A time when everything was warm and perfect.",
			"Forgotten friends greet you, familiar scenery unfolds.",
			"But—it's too perfect, unsettling even.",
			"Whose memory is this sweet illusion?"
		],
		"japanese": [
			"世界樹が呼ぶ場所、そこは過去だった。",
			"全てが暖かく、完璧だった日々。",
			"忘れていた友が迎え、見慣れた風景が広がる。",
			"しかし—完璧すぎて、かえって不安になる。",
			"この甘い幻は、誰の記憶なのだろうか？"
		],
		"chinese": [
			"世界树呼唤之地，乃是过去。",
			"万物温暖、完美无瑕的时光。",
			"遗忘的朋友前来迎接，熟悉的风景展现在眼前。",
			"然而—过于完美，反而令人不安。",
			"这甜美的幻象，是谁的记忆？"
		],
		"french": [
			"Là où l'Arbre-Monde appelle, c'était le passé.",
			"Un temps où tout était chaleureux et parfait.",
			"Des amis oubliés vous accueillent, des paysages familiers se déploient.",
			"Cependant—c'est trop parfait, ce qui est inquiétant.",
			"De qui est cette douce illusion ?"
		],
		"spanish": [
			"Donde el Árbol del Mundo llama, ese era el pasado.",
			"Una época donde todo era cálido y perfecto.",
			"Amigos olvidados te saludan, paisajes familiares se despliegan.",
			"Pero—es demasiado perfecto, lo que lo hace inquietante.",
			"¿De quién es esta dulce ilusión?"
		],
		"vietnamese": [
			"Nơi Cây Thế Giới gọi, đó là quá khứ.",
			"Thời kỳ mọi thứ ấm áp và hoàn hảo.",
			"Bạn bè đã quên chào đón, phong cảnh quen thuộc hiện ra.",
			"Thế nhưng—quá hoàn hảo, lại gây bất an.",
			"Ảo ảnh ngọt ngào này là ký ức của ai?"
		],
		"thai": [
			"ที่ซึ่งต้นไม้โลกเรียกหา ที่นั่นคืออดีต",
			"ช่วงเวลาที่ทุกสิ่งอบอุ่นและสมบูรณ์แบบ",
			"เพื่อนเก่าที่ลืมเลือนต้อนรับ ทิวทัศน์คุ้นเคยปรากฏขึ้น",
			"แต่—มันสมบูรณ์แบบเกินไป จนน่ากังวล",
			"ภาพลวงตาอันหอมหวานนี้ เป็นความทรงจำของใคร?"
		],
		"hindi": [
			"जहाँ विश्व वृक्ष बुलाता है, वह अतीत था।",
			"जब सब कुछ गर्म और सही था वह समय।",
			"भूले हुए दोस्त मिलते हैं, परिचित दृश्य सामने आते हैं।",
			"लेकिन—यह इतना सही है कि असहज महसूस होता है।",
			"यह मधुर भ्रम किसकी याद है?"
		]
	}
} as const;
